<template>
  <div>
    <header>
      <el-menu @select="select" :default-active="defaultActive" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">创建问卷</el-menu-item>
        <el-menu-item index="2">我的问卷</el-menu-item>
      </el-menu>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        defaultActive: '1'
      }
    },
    watch: {
      '$route'() {
        if(this.$route.name === 'mySurvey'){
          this.defaultActive = '2'
        }else{
          this.defaultActive = '1'
        }
      }
    },
    methods: {
      select(index) {
        let toView = {}
        if(index === '1'){
          toView.name = 'CreateSurvey'
        }else if(index === '2'){
          toView.name = 'mySurvey'
        }
        this.$router.push(toView)
      },
      setDefaulteActive() {
        const name = this.$route.name
        let index = '1'

        if(name === 'mySurvey'){
          index = '2'
        }else if(name === 'CreateSurvey'){
          index = '1'
        }
        this.defaultActive = index
      }
    },
    created() {
      this.setDefaulteActive()
    }
  }
</script>
