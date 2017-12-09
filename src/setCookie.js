
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
    date ? `expires=${date.toGMTString()}` : '',
    `${name}=${encodeURIComponent(value)}`,
    `domain=${document.domain}`,
    'path=/',
    ''
  ].join('; ')
  document.cookie = str
}
