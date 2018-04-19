<template>
  <div class="preview margin-auto">
    <el-form :model="formInfo" ref="form" label-width="130px">
      <div
        v-for="(item, parentIndex) in formList"
        class="inner">
        <div v-html="item.title" v-if="item.titleType === '5'"></div>
        <el-form-item
          v-else
          :rules="{required: item.isRequired}"
          :key="parentIndex"
          :label="`${item.title}：`">
          <el-radio-group v-if="item.titleType === '0'" v-model="formInfo[parentIndex]">
            <el-radio :key="index" v-for="(child, index) in item.currentItem" :label="index">{{ child }}</el-radio>
          </el-radio-group>
          <el-checkbox-group v-else-if="item.titleType === '1'" v-model="formInfo['arr' + parentIndex]">
            <el-checkbox :key="index" v-for="(child, index) in item.currentItem" :label="index">{{child}}</el-checkbox>
          </el-checkbox-group>
          <el-select v-else-if="item.titleType === '2'" v-model="formInfo[parentIndex]">
            <el-option :key="index" v-for="(child, index) in item.currentItem" :label="child" :value="index"></el-option>
          </el-select>
          <el-input v-else-if="item.titleType === '3'" v-model="formInfo[parentIndex]"></el-input>
          <el-input v-else-if="item.titleType === '4'" type="textarea" v-model="formInfo[parentIndex]"></el-input>
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
      ...mapState('editorItem', ['formList'])
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
        if (titleType === '1') {
          this.$set(this.formInfo, 'arr' + num, [])
        }
        num++
      })
    }
  }
</script>
<style lang="scss" scoped>
  .preview {
    width: 800px;
    padding: 0 30px;
    height: 100%;
    background-color: #fff;
    overflow: auto;
  }
  .inner {
    min-height: 100px;
  }
</style>
