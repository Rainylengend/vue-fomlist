<template>
  <div class="editor-item">
    <el-form
      :model="formInfo"
      ref="addItem-form" lab-width="auto" :rules="rules">
      <el-form-item label="题目：" prop="title">
        <el-input v-model="formInfo.title"></el-input>
      </el-form-item>
      <el-form-item label="题目类型：">
        <el-select disabled v-model="formInfo.type" placeholder="请选择类型">
          <el-option label="单选" :value="0"></el-option>
          <el-option label="多选" :value="1"></el-option>
          <el-option label="下拉菜单" :value="2"></el-option>
          <el-option label="单行文本" :value="3"></el-option>
          <el-option label="多行文本" :value="4"></el-option>
        </el-select>
        <el-checkbox v-model="formInfo.required">是否必填</el-checkbox>
      </el-form-item>
      <el-form-item
        v-if="formInfo.options.length > 0"
        :label="`选项${index}`"
        v-for="(item, index) in formInfo.options"
        :key="index">
        <el-input placeholder="选项" v-model="formInfo.options[index].text"></el-input>
      </el-form-item>
      <el-form-item v-if="formInfo.options.length > 0">
        <el-button @click="addOptions" calss="addItem">新建选项</el-button>
      </el-form-item>
      <div class="operation">
        <el-button type="primary" @click="enter">确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapMutations} = createNamespacedHelpers('editorItem')

  export default {
    data() {
      return {
        titleType1: '0',
        rules: {
          title: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    props: ['times'],
    computed: {
      ...mapState(['formList']),
      formInfo: {
        get() {
          let {formList, times} = this
          return formList[times]
        },
        set(val) {
          let {times} = this

          this.modifyFormList({index: times, keys: ['options'], command: [val]})
        }
      }
    },
    methods: {
      ...mapMutations(['modifyFormList']),
      enter() {
        const {times, formInfo} = this
        this.$refs['addItem-form'].validate(valid => {
          if (valid) {
            this.modifyFormList({index: times, keys: ['all', 'isSave'], val: formInfo})
            this.$emit('changeCanEditor')
          }
        })
      },
      addOptions() {
        this.formInfo = 'add'
      },
      cancel() {
        const {formList, times} = this

        this.$emit('changeCanEditor')
        if (!formList[times].isSave) {
          this.modifyFormList({keys: ['del'], index: times})
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .operation {
    text-align: center;
  }

  .editor-item {
    border: 1px solid #aaa;
    padding: 10px;
    margin: 10px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  }
</style>
