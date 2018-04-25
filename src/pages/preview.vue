<template>
  <div class="preview-container" :style="{background: theme}">
    <el-form
      class="preview margin-auto"
      label-position="top"
      :model="formInfo" ref="form" label-width="130px">
      <h1 class="form-name" v-html="title"></h1>
      <div
        v-for="(item, parentIndex) in formList"
        class="inner">
        <div v-html="item.title" v-if="item.type === 13"></div>
        <el-form-item
          v-else
          :rules="{required: item.required}"
          :key="parentIndex"
          :label="`${item.title}：`">
          <el-radio-group v-if="item.type === 0" v-model="formInfo[parentIndex]">
            <el-radio :key="index" v-for="(child, index) in item.options" :label="index">{{ child.text }}</el-radio>
          </el-radio-group>
          <el-checkbox-group class="my-checkbox" v-else-if="item.type === 1" v-model="formInfo['arr' + parentIndex]">
            <el-checkbox :key="index" v-for="(child, index) in item.options" :label="index">{{child.text}}</el-checkbox>
          </el-checkbox-group>
          <el-select v-else-if="item.type === 2" v-model="formInfo[parentIndex]">
            <el-option :key="index" v-for="(child, index) in item.options" :label="child.text" :value="index"></el-option>
          </el-select>
          <el-input v-else-if="item.type === 3" v-model="formInfo[parentIndex]"></el-input>
          <el-input v-else-if="item.type === 4" type="textarea" v-model="formInfo[parentIndex]"></el-input>
        </el-form-item>
      </div>

    </el-form>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        formInfo: {}
      }
    },
    computed: {
      ...mapState('editorItem', ['formList', 'title', 'theme'])
    },
    filters: {
      obj(val) {
        return JSON.stringify(val)
      }
    },
    created() {
      const {formList, formInfo} = this
      let num = 0

      formList.forEach(item => {
        let titleType = item.titleType
        if (titleType === 1) {
          this.$set(this.formInfo, 'arr' + num, [])
        }
        num++
      })
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/scss/reset-common";

  .preview-container {
    background-attachment: fixed;
    height: 100vh;
    overflow: auto;
  }

  .preview {
    width: 800px;
    padding: 0 30px;
    min-height: 100%;
    background-color: #fff;
  }

  .inner {
    min-height: 100px;
  }

  .form-name {
    text-align: center;
    padding: 30px 0;
  }
</style>
