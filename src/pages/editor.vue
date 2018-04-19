<template>
  <div class="editor-page">
    <div class="editor-slidebar fl">
      <el-tabs type="border-card">
        <el-tab-pane label="题目控件">
          <ul>
            <li
              class="title-widget"
              :key="item.type"
              @click="addWidget(item.type)"
              v-for="item in titleWidget">{{ item.name}}
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="问卷大纲">
          <ul>
            <li :key="index" v-for="(item, index) in outline">{{index + 1}}：{{ item.title }}</li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="editor-main fl">
      <div class="survey-wrap">
        <el-form
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
                </div>
              </div>
            </component>
          </Draggable>
        </el-form>
      </div>

    </div>
    <div class="editor-right fr">
      <el-button @click="preview">预览</el-button>
    </div>
  </div>
</template>
<script>
  import EditorItem from '@/components/editor-item'
  import EditorText from '@/components/editor-text'
  import Draggable from 'vuedraggable'
  import titleWidget from '@/utils/component-name'
  import Radio from '@/components/radio'
  import Checkbox from '@/components/checkbox'
  import MySelect from '@/components/myselect'
  import LineText from '@/components/line-text'
  import Description from '@/components/description'
  import {mapState, mapMutations, mapGetters} from 'vuex'

  export default {
    name: 'editor',
    data() {
      return {
        titleWidget,
        isShowCommand: []
      }
    },
    computed: {
      ...mapGetters('editorItem', ['widgetName']),
      dragOption() {
        let opt = {animation: 150, disabled: false}
        const {formList} = this

        for(let i in formList){
          if(formList[i].canEditor){
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

        return formList.filter(item => item.titleType !== '5')
      }
    },
    methods: {
      ...mapMutations('editorItem', ['modifyFormList']),
      changeIsShowCommand(index, val) {
        this.$set(this.isShowCommand, index, val)
      },
      copyComponent(index, event) {
        const {modifyFormList} = this

        modifyFormList({keys: ['copy'], index})
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
        modifyFormList(type)
      },
      delComponent(index, event) {
        const {modifyFormList} = this

        modifyFormList({keys: ['del'], index})
        event.stopPropagation()
      },
      preview() {
        const {widgetName} = this

        if (widgetName.length > 0) {
          this.$router.push('preview')
        } else {
          this.$message({
            message: '你好像没添加任何选项哦~',
            type: 'warning'
          })
        }

      }
    },
    components: {
      EditorItem,
      EditorText,
      Radio,
      Checkbox,
      MySelect,
      LineText,
      Description,
      Draggable
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/editor-common";

  .editor-page {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #f0f0f0;
    .el-form-item__content {
      max-width: 500px;
      float: left;
    }
    .el-form-item__label {
      min-width: 100px;
    }
    .editor-slidebar {
      width: 300px;
      height: 100%;
      background: #fff;
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
      margin-left: 50px;
      height: 100%;
    }

    .survey-wrap {
      max-width: 1000px;
      min-width: 800px;
      padding: 0 30px;
      height: 100%;
      background-color: #fff;
      overflow: auto;
      .inner {
        min-height: 100px;
      }
    }
  }

</style>
