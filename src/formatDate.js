
export default (() => {
  const maps = {
    YYYY: ['getFullYear', 4],
    YY: ['getFullYear', 2],
    MM: ['getMonth', 2, 1],
    DD: ['getDate', 2],
    hh: ['getHours', 2],
    mm: ['getMinutes', 2],
    ss: ['getSeconds', 2],
    ms: ['getMilliseconds', 3]
  }
  const keys = Object.keys(maps)
  const defaultPattern = 'YYYY-MM-DD hh:mm:ss'
  const re = /[ymdhs]/i
  return (date, pattern = defaultPattern) => {
    if (typeof date === 'string' && re.test(date)) {
      pattern = date
      date = null
    }
    if (!(date instanceof Date)) {
      date = date ? new Date(date) : new Date()
    }
    return keys.reduce((str, key) => str.replace(key, () => {
      const [func, len, inc] = maps[key]
      let val = `${date[func]() + (inc || 0)}`
      while (val.length < len) {
        val = `0${val}`
      }
      return val.substr(0, len)
    }), pattern)
  }
})()
