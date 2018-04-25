/**
 * create By Songbw on 2018/4/20
 * */
import axios from 'axios'

// axios.defaults.baseURL = 'http://10.10.10.110:8080'
axios.defaults.baseURL = '/'
// axios.defaults.headers.post['Content-Type'] = 'application/json'

function newError(err) {
  return () => {
    throw new Error(err)
  }
}

class GetApi {
  constructor(context) {
    const {url, params = {}, method = 'post'} = context

    this.url = url
    this.params = params
    this.method = method
  }

  static createFormData(data) {
    let formData = new FormData()

    for (let i in data) {
      formData.append(i, JSON.stringify(data[i]))
    }

    return formData
  }

  sendReq(cb = newError('必须写入回调函数'), data, types) {
    const {url, params, method} = this
    let opt = {method, url}

    if (types === 'formData') {
      opt.data = GetApi.createFormData(data)
    } else if (types === 'data') {
      opt.data = data
    } else if (!types) {
      this.setParams(data)
    }

    Object.keys(params).length > 0 && (opt.params = params)
    axios(opt).then(({data}) => {
      cb(data)
    })
  }

  setParams(data) {
    this.params = Object.assign(this.params, data)

    for (let i in this.params) {
      this.params[i] = JSON.stringify(this.params[i])
    }
    return this
  }
}

// export const getQuestionType = new GetApi({method: 'get', url: '/question/types'}) //获取题目类型
// export const createSurvey = new GetApi({url: '/survey/create'}) //创建问卷
// export const saveSurvey = new GetApi({url: '/survey/save'}) //保存问卷
// export const favouriteList = new GetApi({method: 'get', url: '/question/favourite'}) //收藏列表
// export const addFavourite = new GetApi({url: '/question/favourite'}) //添加收藏


export const getQuestionType = new GetApi({method: 'get', url: '/static/questiontype.json'}) //获取题目类型
export const createSurvey = new GetApi({method: 'get', url: '/static/create.json'}) //创建问卷
export const favouriteList = new GetApi({method: 'get', url: '/static/favouritelist.json'}) //收藏列表
export const addFavourite = new GetApi({method: 'get', url: '/static/favouritelist.json'}) //添加收藏
