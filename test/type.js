import test from 'ava'
import {expect} from 'chai'
import * as types from '../src'

test('type', ava => {
  const items = {
    'Object': {},
    'Array': [],
    'Nan': NaN,
    'Undefined': undefined,
    'Boolean': true,
    'Number': 1.0,
    'String': '',
    'Null': null,
    'Function': () => {},
    'RegExp': /text/,
    'Date': new Date()
  }
  Object.keys(items).forEach((name) => {
    // items
    Object.keys(items).forEach((key) => {
      let ret = types['is' + name](items[key])
      expect(ret).to.eql(name === key)
    })
  })
  ava.pass()
})
