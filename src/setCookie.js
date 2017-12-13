
export default (name, value, duration) => {
  if (duration === undefined) {
    // one year
    duration = (365 * 24 * 60 * 60 * 1000)
  }
  let date = duration
  if (!(duration instanceof Date)) {
    date = duration < 0 ? null : new Date(new Date().getTime() + duration)
  }
  let str = [
    `${name}=${encodeURIComponent(value)}`,
    `domain=${document.domain}`,
    'path=/'
  ]

  if (date) {
    str.push(`expires=${date.toGMTString()}`)
  }
  str = str.join('; ')

  document.cookie = str
}
