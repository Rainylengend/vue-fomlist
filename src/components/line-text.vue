<template>
  <div class="item-container">
    <slot name="EditorItem" v-if="canEditor" :times="times"></slot>
    <el-form-item
      v-else
      class="my-checkbox"
      :rules="rules"
      :label="`${formList[times].title}：`">
      <el-input :type="elInputType"></el-input>
    </el-form-item>
    <slot name="mask" v-if="!canEditor"></slot>
  </div>
</template>
<script>
  import EditorItem from '@/components/editor-item'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapMutations} = createNamespacedHelpers('editorItem')

  export default {
    name: 'LineText',
    props: ['times', 'data'],
    data() {
      return {
        formInfo: ''
      }
    },
    computed: {
      ...mapState(['formList']),
      rules() {
        return {required: this.data.required}
      },
      canEditor: {
        get() {
          return this.data.canEditor
        },
        set(val) {
          const {modifyFormList} = this

          modifyFormList({keys: ['canEditor'], val: val, index: this.times})
        }
      },
      elInputType() {
        const {formList, times} = this
        let type

        switch (formList[times].titleType) {
          case 3:
            type = 'text';
            break;
          case 4:
            type = 'textarea';
            break;
        }

        return type
      }
    },
    methods: {
      ...mapMutations(['modifyFormList'])
    },
    components: {
      EditorItem
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/scss/editor-common";
</style>

