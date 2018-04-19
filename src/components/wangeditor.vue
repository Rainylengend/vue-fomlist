<template>
  <div class="wangeditor" id="wangeditor"></div>
</template>
<script>
  import E from 'wangeditor'

  export default {
    name: 'WangEditor',
    props: ['html'],
    data() {
      return {
        editor: null
      }
    },
    methods: {
      createEditor() {
        let {html} = this
        let editor = new E('#wangeditor')

        editor.customConfig.menus = [
          'head',
          'bold',
          'italic',
          'underline'
        ]
        editor.customConfig.onchange = (html) => {
          this.$emit('getHtml', html)
        }
        editor.create()
        editor.txt.html(html)
        this.editor = editor
      }
    },
    mounted() {
      const {createEditor} = this

      createEditor()
    }
  }
</script>
<style lang="scss" scoped>
  .wangeditor {
    min-height: 300px;
  }
</style>
