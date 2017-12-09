
export default name => {
  let regex = new RegExp(
    '(^|(; ))' + // beginning of document.cookie, or "; " which signifies the beginning of a new cookie
    name +
    '=([^;]*)') // the value of the cookie, matched up until a ";" or the end of the string

  let match = document.cookie.match(regex)
  let value = match && match[3]
  return value && decodeURIComponent(value)
}
