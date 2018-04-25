<template>
  <div class="editor-page">
    <div class="operation-bar">
      <ul class="operation-l fl clear">
        <li @click="switchTabBar(index)" :key="index" v-for="(item, index) in editorSlidebarShow" class="fl" :class="{active: item.isShow}">{{ item.title }}</li>
      </ul>
      <div class="operation-r fr">
        <el-button @click="preview" type="text" icon="el-icon-view">预览</el-button>
        <el-button @click="save" type="text" icon="el-icon-check">保存</el-button>
      </div>
    </div>
    <main class="clear">
      <div class="editor-slidebar fl">
        <el-tabs v-show="editorSlidebarShow[0].isShow" type="border-card">
          <el-tab-pane label="题目控件">
            <ul>
              <li
                class="title-widget"
                :key="item.index"
                @click="addWidget(item.index)"
                v-for="item in questionType">{{ item.name}}
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="问卷大纲">
            <ul>
              <li :key="index" v-for="(item, index) in outline">{{index + 1}}：{{ item.title }}</li>
            </ul>
          </el-tab-pane>
        </el-tabs>
        <!--换肤-->
        <div v-show="editorSlidebarShow[1].isShow" class="theme-box">
          <ul class="color-list">
            <li :class="{active: theme === item.val}" @click="switchTheme(item.val)" :key="index" v-for="(item,index) in themeList">{{ item.name }}</li>
          </ul>
        </div>
        <!--换肤-->
      </div>
      <!--编辑内容区域-->
      <div class="editor-main" :style="{background: theme}">
        <div class="survey-wrap">
          <Form-title></Form-title>
          <el-form
            label-position="top"
            label-width="auto">
            <Draggable
              :options="dragOption"
              v-model="formList">
              <component
                :times="index"
                :data="formList[index]"
                class="inner"
                @delComponent="delComponent"
                v-for="(item, index) in widgetName" :is="item" :key="index">
                <Editor-text
                  :times="index"
                  @changeCanEditor="changeCanEditor(index)"
                  v-if="item === 'Description'"
                  slot="EditorItem"></Editor-text>
                <Editor-item
                  v-else
                  slot="EditorItem"
                  :times="index"
                  @changeCanEditor="changeCanEditor(index)">
                </Editor-item>
                <div class="mask" slot="mask" @click="changeCanEditor(index, true)" @mouseover="changeIsShowCommand(index, true)" @mouseout="changeIsShowCommand(index, false)">
                  <div class="command" v-show="isShowCommand[index]">
                    <i class="el-icon-close" title="删除" @click="delComponent(index, $event)"></i>
                    <i class="el-icon-document" title="复制" @click="copyComponent(index, $event)"></i>
                    <i class="el-icon-star-on" title="收藏" @click="collection(index, $event)"></i>
                  </div>
                </div>
              </component>
            </Draggable>
          </el-form>
        </div>
      </div>
      <!--编辑内容区域-->
      <div class="editor-question-bank">
        <h2>题库</h2>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <i class="el-icon-star-on"></i> 收藏的题目
            </template>
            <div v-if="collectionList.length === 0">
              暂时没有收藏
            </div>
            <div @click="addWidget(item)" class="collection-list" v-else v-for="(item, index) in collectionList">{{ item.title }}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </main>
  </div>
</template>
<script>
  import EditorItem from '@/components/editor-item'
  import EditorText from '@/components/editor-text'
  import FormTitle from '@/components/formtitle'
  import Draggable from 'vuedraggable'
  import Radio from '@/components/radio'
  import Checkbox from '@/components/checkbox'
  import MySelect from '@/components/myselect'
  import LineText from '@/components/line-text'
  import Description from '@/components/description'
  import {createNamespacedHelpers} from 'vuex'
  import {getObjectVal} from '@/utils/common'
  import {saveSurvey} from '@/api/api'

  const {mapState, mapMutations, mapGetters, mapActions} = createNamespacedHelpers('editorItem')

  export default {
    name: 'editor',
    data() {
      return {
        editorSlidebarShow: [{
          title: '编辑问卷',
          isShow: true
        }, {
          title: '选择皮肤',
          isShow: false
        }],
        themeList: [{
          name: '灰色',
          val: '#f1f1f1'
        }, {
          name: '蓝色',
          val: '#369'
        }, {
          name: '绿色',
          val: '#366'
        }, {
          name: '青色',
          val: '#399'
        }],
        isShowCommand: []
      }
    },
    computed: {
      ...mapGetters(['widgetName']),
      ...mapState(['questionType', 'theme', 'collectionList', 'title']),
      dragOption() {
        let opt = {animation: 150, disabled: false}
        const {formList} = this

        for (let i in formList) {
          if (formList[i].canEditor) {
            opt.disabled = true
            break
          }
        }

        return opt
      },
      formList: {
        get() {
          return this.$store.state.editorItem.formList
        },
        set(value) {
          this.modifyFormList({keys: ['sort'], val: value})
        }
      },
      outline() {
        const {formList} = this

        return formList.filter(item => item.type !== 13)
      }
    },
    methods: {
      ...mapActions(['getQuestionType', 'getCollectionList']),
      ...mapMutations(['modifyFormList', 'setCollectionList', 'setTheme']),
      switchTheme(color) {
        const {setTheme} = this

        setTheme(color)
      },
      switchTabBar(index) {
        const {editorSlidebarShow} = this

        this.editorSlidebarShow = editorSlidebarShow.map((item, i) => {
          item.isShow = i === index
          return item
        })
      },
      changeIsShowCommand(index, val) {
        this.$set(this.isShowCommand, index, val)
      },
      copyComponent(index, event) {
        const {modifyFormList} = this

        modifyFormList({keys: ['copy'], index})
        event.stopPropagation()
      },
      collection(index, event) {
        const {formList, setCollectionList} = this

        let collectionVal = formList[index]

        setCollectionList({command: 'add', val: collectionVal})
        event.stopPropagation()
      },
      changeCanEditor(index, val = false) {
        const {modifyFormList, changeIsShowCommand} = this

        this.$set(this.dragOption, 'disabled', val)
        changeIsShowCommand(index, false)
        modifyFormList({keys: ['canEditor'], val: val, index})
      },
      addWidget(type) {
        const {modifyFormList} = this

        if (typeof type === 'object') {
          console.log(type);
          modifyFormList({keys: ['addHasValItem'], val: type})
        } else {
          modifyFormList(type)
        }

      },
      delComponent(index, event) {
        const {modifyFormList} = this

        modifyFormList({keys: ['del'], index})
        event.stopPropagation()
      },
      preview() {
        const {widgetName} = this

        if (widgetName.length > 0) {
          this.$router.push({name:'Preview'})
        } else {
          this.$message({
            message: '你好像没添加任何选项哦~',
            type: 'warning'
          })
        }

      },
      save() {
        const {title, $route, formList} = this
        const id = $route.params.id
        const questions = formList.map(item => {
          return getObjectVal(item, ['title', 'type', 'options', 'required'])
        })
        saveSurvey.sendReq((data) => {
          this.$message({
            message: data.msg,
            type: 'success'
          })
        }, {id, name: title, questions}, 'data')
      }
    },
    created() {
      this.getQuestionType()
      this.getCollectionList()
    },
    components: {
      EditorItem,
      EditorText,
      Radio,
      Checkbox,
      MySelect,
      LineText,
      Description,
      Draggable,
      FormTitle
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/editor-common";
  @import "../assets/scss/base-color";

  .operation-bar {
    height: 60px;
    background: #fff;
    margin-bottom: 10px;
    line-height: 60px;
    padding: 0 20px;
    .operation-l {
      li {
        font-size: 20px;
        cursor: pointer;
        &:hover {
          color: $blue;
        }
        &.active {
          color: $blue;
        }
        + li {
          margin-left: 20px;
        }
      }
    }
  }

  main {
    height: calc(100vh - 70px);
    position: relative;
  }

  .editor-page {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #f1f1f1;
    .editor-slidebar {
      width: 300px;
      height: 100%;
      background: #fff;
    }
    .theme-box {
      padding: 10px;
      .color-list {
        line-height: 30px;
        li {
          border: 1px solid #aaa;
          padding-left: 10px;
          cursor: pointer;
          &.active {
            border-color: $blue;
            color: $blue;
          }
          + li {
            margin-top: 10px;
          }
        }
      }
    }

    .title-widget {
      line-height: 40px;
      padding-left: 10px;
      border: 1px solid #ddd;
      cursor: pointer;
      + .title-widget {
        margin-top: 10px;
      }
    }

    .editor-main {
      position: absolute;
      top: 0;
      left: 300px;
      right: 330px;
      bottom: 0;
      background-attachment: fixed;
      transition: background .3s;
    }
    .editor-question-bank {
      position: absolute;
      right: 0;
      width: 330px;
      height: 100%;
      background-color: #fff;
      padding: 10px;
    }
    .collection-list {
      line-height: 40px;
      border-bottom: 1px solid #aaa;
      cursor: pointer;
    }
    @media screen and (max-width: 1450px) {
      .editor-question-bank {
        width: 200px;
      }
      .editor-main {
        right: 200px;
      }
    }
    .survey-wrap {
      width: 800px;
      padding: 0 30px;
      height: 100%;
      background-color: #fff;
      overflow: auto;
      margin: auto;
      .inner {
        min-height: 140px;
      }
    }
  }

</style>
