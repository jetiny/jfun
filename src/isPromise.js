import isFunction from './isFunction.js'

export default val => val && isFunction(val.then)
