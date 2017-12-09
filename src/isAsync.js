import isFunction from './isFunction.js'

export default val => isFunction(val) && val.constructor.name === 'AsyncFunction'
