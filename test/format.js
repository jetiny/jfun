import test from 'ava'
import {expect} from 'chai'
import {formatDate} from '../src'

test('formatDate', ava => {
  // should return the default formatDate
  expect(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(formatDate())).to.eql(true)
  // should work with delimiters
  expect(/^\[\d{4}\]/.test(formatDate('[YYYY]'))).to.eql(true)
  expect(/^\[\d{4}\d{2}\]/.test(formatDate('[YYYYMM]'))).to.eql(true)
  expect(/^\[\d{4}:\d{2}\]/.test(formatDate('[YYYY:MM]'))).to.eql(true)
  //'should return the year
  expect(/^\d{4}$/.test(formatDate('YYYY'))).to.eql(true)
  //'should return the month
  expect(/^\d{2}$/.test(formatDate('MM'))).to.eql(true)
  //'should return the day
  expect(/^\d{2}$/.test(formatDate('DD'))).to.eql(true)
  //'should return hours
  expect(/^\d{2}$/.test(formatDate('hh'))).to.eql(true)
  //'should return minutes
  expect(/^\d{2}$/.test(formatDate('mm'))).to.eql(true)
  //'should return seconds
  expect(/^\d{2}$/.test(formatDate('ss'))).to.eql(true)
  //'should return miliseconds
  expect(/^\d{3}$/.test(formatDate('ms'))).to.eql(true)
  // should work with no separators
  expect(/^\d{4}\d{2}$/.test(formatDate('YYYYMM'))).to.eql(true)
  expect(/^\d{4}\d{2}\d{2}$/.test(formatDate('YYYYMMDD'))).to.eql(true)
  expect(/^\d{4}\d{2}\d{2}\d{2}$/.test(formatDate('YYYYMMDDss'))).to.eql(true)
  expect(/^\d{4}\d{2}\d{2}$/.test(formatDate('YYYYMMss'))).to.eql(true)
  // should increment zero-based month
  ava.pass()
})
