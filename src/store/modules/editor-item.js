/**
 * create By Songbw on 2018/4/16
 * */
import {deepClone} from '@/utils/common'
import {getQuestionType} from '@/api/api'
import {createSurvey, favouriteList, addFavourite} from '@/api/api'

export default {
  namespaced: true,
  state: {
    surveyId: null,
    title: '<p>问卷标题</p>',
    theme: '#f1f1f1',
    formList: [],
    questionType: [],
    collectionList: []
  },
  actions: {
    getCollectionList({commit}) {
      favouriteList.sendReq((data) => {
        commit('setCollectionList', {command: 'init', val: data.obj})
      })
    },
    getQuestionType({commit}) {
      getQuestionType.sendReq((data) => {
        commit('setQuestionType', data.obj)
      })
    }
  },
  mutations: {
    setSurveyId(state, val) {
      state.surveyId = val
    },
    setTheme(state, val) {
      state.theme = val
    },
    setCollectionList(state, opt) {
      let commandHandle = {
        init(state, val) {
          state.collectionList = val.map(item => {
            item.canEditor = true
            return item
          })
        },
        add(state, val) {
          addFavourite.sendReq(() => {
            state.collectionList.push(val)
          }, val, 'data')
        },
        del(state, index) {
          state.collectionList.splice(index, 1)
        }
      }

      if (opt instanceof Object) {
        const {command, val, index} = opt
        commandHandle[command] && commandHandle[command](state, deepClone(val), index)
      }

    },
    setTitle(state, val) {
      state.title = val
    },
    setQuestionType(state, val) {
      state.questionType = val
    },
    modifyFormList(state, opt) {
      let tempFormList = {
        title: '',
        type: '',
        options: [{text: ''}, {text: ''}],
        isSave: false,
        canEditor: true,
        required: true
      }
      if (opt instanceof Object) {
        const {keys = [], val, index, command} = opt

        keys.forEach((item, i) => {
          if (item === 'options' && command[i] === 'add') {
            state.formList[index][item].push({text: ''})
          } else if (item === 'isSave') {
            state.formList[index][item] = true
          } else if (item === 'all') {
            state.formList[index] = val
          } else if (item === 'del') {
            state.formList.splice(index, 1)
          } else if (item === 'sort') {
            state.formList = val
          } else if (item === 'canEditor') {
            state.formList[index].canEditor = val
          } else if (item === 'copy') {
            let copy = deepClone(state.formList[index])
            state.formList.splice(index + 1, 0, copy)
          } else if (item === 'required') {
            state.formList[index].required = val
          } else if (item === 'setTitle') {
            state.formList[index].title = val
          } else if (item === 'addHasValItem') {
            state.formList.push(deepClone(val))
          }
        })

      } else {
        tempFormList.type = opt

        if (opt === 3 || opt === 4) {
          tempFormList.options.length = []
        }

        state.formList.push(tempFormList)
      }

    }
  },
  getters: {
    widgetName(state) {
      return state.formList.map(item => {
        let name

        if (item.type === 0) {
          name = 'Radio'
        } else if (item.type === 1) {
          name = 'Checkbox'
        } else if (item.type === 2) {
          name = 'MySelect'
        } else if (item.type === 3) {
          name = 'LineText'
        } else if (item.type === 4) {
          name = 'LineText'
        } else if (item.type === 13) {
          name = 'Description'
        }

        return name
      })
    }
  }
}
