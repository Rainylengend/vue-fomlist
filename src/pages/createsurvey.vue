<template>
  <div class="create-survey">
    <el-row>
      <el-col :span="12" class="command">
        <div class="content">
          <p>创建问卷</p>
          <p>从一份空白问卷开始创建</p>
          <el-button class="skip-button" icon="el-icon-plus" @click="routerSkip">开始</el-button>
        </div>
      </el-col>
      <el-col :span="12" class="command">
        <div class="content">
          <p>选择问卷模板</p>
          <p>使用问卷提供的专业模板</p>
          <el-button class="skip-button" icon="el-icon-plus">开始</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {createSurvey} from '@/api/api'
  import {mapMutations} from 'vuex'
  export default {
    name: 'CreateSurvey',
    methods: {
      ...mapMutations('editorItem', ['setSurveyId']),
      routerSkip() {
        const {setSurveyId} = this

        createSurvey.sendReq((data) => {
          if(data.success){
            let id = data.obj.id

            setSurveyId(id)
            this.$router.push({name: 'Editor', params: {id}})
          }else{
            this.$message({
              message: data.msg,
              type: 'warning'
            })
          }
        })
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
      height: 100vh;
      font-size: 26px;
      &:nth-of-type(1) {
        background: $blue;
      }
      &:nth-of-type(2) {
        background: $green;
      }
    }
  }
</style>
