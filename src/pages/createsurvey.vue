<template>
  <div class="create-survey">
    <el-row>
      <el-col :span="12" class="command">
        <div class="content">
          <p>创建问卷</p>
          <p>从一份空白问卷开始创建</p>
          <el-button class="skip-button" icon="el-icon-plus" @click="routerSkip('Editor')">开始</el-button>
        </div>
      </el-col>
      <el-col :span="12" class="command">
        <div class="content">
          <p>选择问卷模板</p>
          <p>使用问卷提供的专业模板</p>
          <el-button class="skip-button" icon="el-icon-plus" @click="routerSkip('Template')">开始</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'

  export default {
    name: 'CreateSurvey',
    methods: {
      ...mapMutations('editorItem', ['resetEditorItem']),
      routerSkip(name) {
        const {resetEditorItem} = this

        if(name === 'Editor'){
          resetEditorItem()
          this.$router.push({name: 'Editor'})
        }else if(name === 'Template'){
          this.$router.push({name:'Template'})
        }

      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/scss/base-color";

  .create-survey {
    .content {
      width:100%;
      position: absolute;
      top: 50%;
      margin-top: -71px;
    }
    .skip-button{
      margin-top:20px;
    }
    .command {
      position: relative;
      text-align: center;
      color: #fff;
      height: calc(100vh - 61px);
      font-size: 26px;
      &:nth-of-type(1) {
        background: $green;
      }
      &:nth-of-type(2) {
        background: $blue;
      }
    }
  }
</style>
