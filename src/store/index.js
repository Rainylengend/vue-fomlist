/**
 * create By Songbw on 2018/4/16
 * */
import Vuex from 'vuex'
import Vue from 'vue'
import editorItem from '@/store/modules/editor-item'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    title: 312
  },
  mutations: {
    increment (state) {
      state.title++
    }
  },
  modules: {
    editorItem
  }
})

export default store
