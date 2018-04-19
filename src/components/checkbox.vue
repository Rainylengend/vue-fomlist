<template>
  <div class="item-container">
    <slot name="EditorItem" v-if="canEditor" :times="times"></slot>
    <el-form-item
      v-else
      class="my-checkbox"
      labe-width="100px"
      :rules="rules"
      :label="`${formList[times].title}：`">
      <el-checkbox-group v-model="formInfo">
        <el-checkbox :label="index" name="type" v-for="(item, index) in formList[times].currentItem" :key="index">{{item}}</el-checkbox>
      </el-checkbox-group>
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
        formInfo: []
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
    components: {
      EditorItem
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/scss/editor-common";
</style>
