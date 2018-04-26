<template>
  <div class="my-survey">
    <ul class="clear margin-auto">
      <li @click="switchEditor(item)" class="survey-item" :key="item.id" v-for="item in surveyList" v-html="item.name"></li>
    </ul>
  </div>
</template>
<script>
  import {getMySurvey} from '@/api/api'
  import {createNamespacedHelpers} from 'vuex'
  import {getObjectVal} from '@/utils/common'

  const {mapMutations} = createNamespacedHelpers('editorItem')
  export default {
    name: 'mySurvey',
    data() {
      return {
        surveyList: []
      }
    },
    methods: {
      ...mapMutations(['setSurveyId', 'setTitle', 'modifyFormList']),
      switchEditor(info) {
        const {setSurveyId, setTitle, modifyFormList} = this
        let questions = info.questions.map(item => {
          item = getObjectVal(item, ['title', 'type', 'options', 'required'])
          item.canEditor = false
          item.isSave = true
          return item
        })
        setSurveyId(info.id)
        setTitle(info.name)
        modifyFormList({val: questions, keys: ['sort']})
        this.$router.push({name: 'Editor'})
      }
    },
    created() {
      getMySurvey.sendReq(data => {
        this.surveyList = data.obj.content
      })
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/scss/base-color";

  .my-survey {
    padding-top: 10px;
    > ul {
      width: 1200px;
    }
  }

  .survey-item {
    float: left;
    width: 224px;
    height: 300px;
    border: 1px solid #ddd;
    text-align: center;
    margin: 0 10px 10px 0;
    cursor: pointer;
    &:hover {
      background-color: $green-1;
      color: #fff;
    }
    &:nth-of-type(5n) {
      margin-right: 0;
    }
  }
</style>
