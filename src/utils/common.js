/**
 * create By Songbw on 2018/4/16
 * */

export function deepClone(arr) {
  if (typeof arr !== "object") {
    return arr
  }

  let result =  arr instanceof Array ? [] : {}

  for (let i in arr) {
    result[i] = deepClone(arr[i])
  }
  return result;
}

export function getObjectVal(obj, keys) {
  let newObj = {}

  function isKeys(val) {
    let flag = false
    for(let i in keys) {
      if(val === keys[i]){
        flag = true
        return flag
      }
    }
    return flag
  }

  for(let i in obj){
    if( isKeys(i) ){
      newObj[i] = obj[i]
    }
  }

  return newObj
}
