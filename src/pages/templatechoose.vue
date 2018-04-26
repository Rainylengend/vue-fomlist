<template>
  <div class="template-choose">
    <div class="bar">
      <div class="bar-main">
        <h3>
          选择问卷模板
          <span>使用我们为你提供的专业模板</span>
        </h3>
      </div>
    </div>
    <main>
      <el-row>
        <el-col class="content" :span="4">
          <h3>场景分类</h3>
        </el-col>
        <el-col class="content" :span="10">
          <div>
            全部
          </div>
        </el-col>
        <el-col class="content" :span="10">
          <h3>标题</h3>
        </el-col>
      </el-row>
    </main>
  </div>
</template>
<script>
  import {getTempTag} from '@/api/api'

  export default {
    name: 'TemplateChoose',
    created() {
      getTempTag.sendReq(data => {
        console.log(data);
      })
    }
  }
</script>
<style lang="scss" scoped>
  .template-choose {
    .bar {
      height: 60px;
      border-bottom: 1px solid #ddd;
    }
    .bar-main {
      width: 1300px;
      margin: auto;
      line-height: 60px;
      h3 {
        font-size: 20px;
        font-weight: bold;
        span {
          font-weight: normal;
          font-size: 16px;
          color: #666;
        }
      }
    }
    main {
      width: 1300px;
      height: calc(100vh - 121px);
      margin: auto;
      > * {
        height: 100%;
      }
      .content {
        height: 100%;
        &:nth-of-type(1) {
          background-color: #f1f1f1;
        }
        &:nth-of-type(3) {
          background-color: #f1f1f1;
        }
      }
    }
  }
</style>
