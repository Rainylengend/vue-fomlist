<template>
  <div class="editor-item">
    <Wang-editor @getHtml="getHtml" :html="formList[times].title"></Wang-editor>
    <div class="operation">
      <el-button type="primary" @click="enter">确定</el-button>
      <el-button @click="cancel">取消</el-button>
    </div>
  </div>
</template>
<script>
  import WangEditor from '@/components/wangeditor'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapMutations} = createNamespacedHelpers('editorItem')
  export default {
    name: 'EditorText',
    props: ['times'],
    data() {
      return {
        html: ''
      }
    },
    computed: {
      ...mapState(['formList'])
    },
    methods: {
      ...mapMutations(['modifyFormList']),
      getHtml(html) {
        this.html = html
      },
      enter() {
        const {times, html, modifyFormList} = this
        modifyFormList({keys: ['setTitle', 'isSave'], index: times, val: html})
        this.$emit('changeCanEditor')
      },
      cancel() {
        const {formList, times} = this

        this.$emit('changeCanEditor')
        if (!formList[times].isSave) {
          this.modifyFormList({keys: ['del'], index: times})
        }
      }
    },
    components: {
      WangEditor
    },
    created() {
      const {formList, times} = this
      this.html = formList[times].title
    }
  }
</script>
<style lang="scss" scoped>
  .operation {
    margin-top: 10px;
    text-align: center;
  }

  .editor-item {
    border: 1px solid #aaa;
    padding: 10px;
    margin: 10px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  }
</style>
