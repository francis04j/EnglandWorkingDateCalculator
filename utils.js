/**
 * TODO: optimise data
 * get value at `keys` from `object`
 * @example
 * get({a: {b: {c: 2}}}, ['a', 'b', 'c']) //> 2
 */
 export const get = (data, keys = [], def) => {
    let values = data
    if (typeof keys === 'string') keys = keys.split('.')
       
    for (const key of keys) {
      
      if (values && values[key]) { 
        values = values[key]
   
       } else { 

         return def
         }
    }
    return values
  }

  /**
 * set `value` at `keys` from `object`
 * @example
 * set({a: {b: {c: 2}}}, ['a', 'b', 'c'], 3)
 */
export const set = (obj, keys = [], value) => {
    let key
    let ref
    let o = obj
    for (key of keys) {
      ref = o
      if (toString.call(o[key]) !== '[object Object]') o[key] = {}
      o = o[key]
    }
    ref[key] = value
    return obj
  }

  export default {
    get,
    set,
  }