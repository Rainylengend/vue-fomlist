/**
 * create By Songbw on 2018/4/16
 * */
import {deepClone} from '@/utils/common'
import {getQuestionType} from '@/api/api'

export default {
  namespaced: true,
  state: {
    title: '<p>问卷标题</p>',
    formList: [],
    questionType: [],
  },
  actions: {
    getQuestionType({commit}) {
      getQuestionType.sendReq((data) => {
        commit('setQuestionType', data.obj)
      })
    }
  },
  mutations: {
    setTitle(state, val) {
      state.title = val
    },
    setQuestionType(state, val) {
      state.questionType = val
    },
    modifyFormList(state, opt) {
      let tempFormList = {
        title: '',
        titleType: '',
        currentItem: ['', ''],
        isSave: false,
        canEditor: true,
        isRequired: true
      }
      if (opt instanceof Object) {
        const {keys = [], val, index, command} = opt

        keys.forEach((item, i) => {
          if (item === 'currentItem' && command[i] === 'add') {
            state.formList[index][item].push('')
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
          } else if (item === 'isRequired') {
            state.formList[index].isRequired = val
          } else if (item === 'setTitle') {
            state.formList[index].title = val
          }
        })

      } else {
        tempFormList.titleType = opt
        if (opt === 3 || opt === 4) {
          tempFormList.currentItem.length = []
        }
        state.formList.push(tempFormList)
      }

    }
  },
  getters: {
    widgetName(state) {
      return state.formList.map(item => {
        let name

        if (item.titleType === 0) {
          name = 'Radio'
        } else if (item.titleType === 1) {
          name = 'Checkbox'
        } else if (item.titleType === 2) {
          name = 'MySelect'
        } else if (item.titleType === 3) {
          name = 'LineText'
        } else if (item.titleType === 4) {
          name = 'LineText'
        } else if (item.titleType === 13) {
          name = 'Description'
        }

        return name
      })
    }
  }
}
