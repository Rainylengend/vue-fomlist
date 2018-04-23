/**
 * create By Songbw on 2018/4/20
 * */
const axios = require('axios')
// axios.defaults.baseURL = 'http://10.10.10.110:8080'
axios.defaults.baseURL = '/'

function newError(err) {``
  return () => {
    throw new Error(err)
  }
}

class GetApi {
  constructor(context) {
    const {url, params, method = 'post'} = context

    this.url = url
    this.params = params
    this.method = method
  }
  sendReq(cb = newError('必须写入回调函数')) {
    const {url, params, method} = this
    let opt = {
      method,
      url
    }
    params && (opt.params = params)
    axios(opt).then(({data}) => {
      cb(data)
    })
  }
}

// export const getQuestionType = new GetApi({method: 'get', url: '/question/types'})
export const getQuestionType = new GetApi({method: 'get', url: '/static/mock.json'})
