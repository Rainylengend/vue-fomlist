<template>
  <div class="item-container">
    <slot name="EditorItem" v-if="canEditor" :times="times"></slot>
    <el-form-item
      v-else
      class="my-checkbox"
      :rules="rules"
      :label="`${formList[times].title}：`">
      <el-select v-model="formInfo" placeholder="请选择">
        <el-option
          v-for="(item, index) in formList[times].options"
          :key="index"
          :label="item.text"
          :value="index">
        </el-option>
      </el-select>
    </el-form-item>
    <slot name="mask" v-if="!canEditor"></slot>
  </div>
</template>
<script>
  import EditorItem from '@/components/editor-item'
  import {createNamespacedHelpers} from 'vuex'

  const {mapMutations, mapState} = createNamespacedHelpers('editorItem')
  export default {
    name: 'MySelect',
    props: ['times', 'data'],
    data() {
      return {
        formInfo: []
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

