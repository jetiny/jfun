import getClassName from './getClassName.js'

export default val => getClassName(val) === 'Object' && val !== null
