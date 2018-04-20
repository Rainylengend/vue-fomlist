<template>
  <div class="item-container">
    <Wang-editor @getHtml="getHtml" :html="html" v-if="canEditor" minHeight="100"></Wang-editor>
    <h1 class="form-name" v-html="html" v-else></h1>
    <div class="mask" v-if="!canEditor" @click="changCanEditor(true)"></div>
    <div class="operation" v-if="canEditor">
      <el-button type="primary" @click="enter">确定</el-button>
      <el-button @click="changCanEditor(false)">取消</el-button>
    </div>
  </div>
</template>
<script>
  import WangEditor from '@/components/wangeditor'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapMutations} = createNamespacedHelpers('editorItem')

  export default {
    data() {
      return {
        canEditor: false,
        sessionHtml: ''
      }
    },
    computed: {
      ...mapState({
        html: state => state.title
      })
    },
    methods: {
      ...mapMutations(['setTitle']),
      getHtml(html) {
        this.sessionHtml = html
      },
      changCanEditor(val) {
        this.canEditor = val
      },
      enter() {
        this.setTitle(this.sessionHtml)
        this.changCanEditor(false)
      }
    },
    created() {
      this.sessionHtml = this.html
    },
    components: {
      WangEditor
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/scss/editor-common";

  .form-name {
    text-align: center;
    padding: 30px 0;
  }

  .operation {
    margin-top: 10px;
    text-align: center;
  }
</style>
