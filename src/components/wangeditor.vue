<template>
  <div v-setHeight="minHeight" class="wangeditor" id="wangeditor" :style="{height: minHeight + 'px'}"></div>
</template>
<script>
  import E from 'wangeditor'

  export default {
    name: 'WangEditor',
    props: {
      html: {
        type: String
      },
      minHeight: {
        default: 300,
        type: [Number, String]
      }
    },
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
    directives: {
      setHeight: {
        inserted(el,{value}) {
          setTimeout(() => {
            el.querySelector('.w-e-text-container').style.height = value -33 + 'px'
          },0)
        }
      }
    },
    mounted() {
      const {createEditor} = this

      createEditor()
    }
  }
</script>
