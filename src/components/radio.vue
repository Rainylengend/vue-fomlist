<template>
  <div class="item-container">
    <slot name="EditorItem" v-if="canEditor" :times="times"></slot>
    <el-form-item
      v-else
      :rules="rules"
      :label="`${formList[times].title}：`">
      <el-radio-group v-model="formInfo">
        <el-radio
          :label="index"
          :key="index"
          v-for="(item, index) in formList[times].currentItem">
          {{ item }}
        </el-radio>
      </el-radio-group>
    </el-form-item>
    <slot name="mask" v-if="!canEditor"></slot>
  </div>
</template>
<script>
  import EditorItem from '@/components/editor-item'
  import {mapMutations, mapState} from 'vuex'

  export default {
    data() {
      return {
        formInfo: '0'
      }
    },
    props: ['times', 'data'],
    computed: {
      ...mapState('editorItem', ['formList']),
      rules(){
        return {required: this.data.isRequired}
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
      ...mapMutations('editorItem', ['modifyFormList'])
    },
    components: {EditorItem}
  }
</script>
<style lang="scss" scoped>
  @import "../assets/scss/editor-common";
</style>
