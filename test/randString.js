import test from 'ava'
import {expect} from 'chai'
import {randString} from '../src'

test('randString', ava => {
  expect(randString().length).to.eql(6)
  expect(/^\d{5}$/.test(randString(5, 'd'))).to.eql(true)
  expect(/^[a-z]{5}$/.test(randString(5, 'l'))).to.eql(true)
  expect(/^[A-Z]{5}$/.test(randString(5, 'u'))).to.eql(true)
  expect(/^[A-Za-z]{5}$/.test(randString(5, 'ul'))).to.eql(true)
  expect(/^[A-Za-z0-9]{5}$/.test(randString(5, 'uld'))).to.eql(true)
  expect(randString(6, '$', '!')).to.eql('!!!!!!')
  expect(randString(5, '$', 'a')).to.eql('aaaaa')
  expect(/^[\u4f60\u597d]{5}$/.test(randString(5, '$', '你好'))).to.eql(true)
  ava.pass()
})
