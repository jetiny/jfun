var isFunction = val => typeof val === 'function';

var getClassName = val => Object.prototype.toString.call(val).slice(8, -1);

var isObject = val => getClassName(val) === 'Object' && val !== null;

var isArray = Array.isArray;

var isString = val => typeof val === 'string';

var isNan = val => typeof val === 'number' && isNaN(val);

var isNull = val => val === null;

var isUndefined = val => val === undefined;

var isRegExp = val => getClassName(val) === 'RegExp';

var isDate = val => getClassName(val) === 'Date';

var isBoolean = val => typeof val === 'boolean';

var isNumber = val => typeof val === 'number' && !isNaN(val);

var isAsync = val => isFunction(val) && val.constructor.name === 'AsyncFunction';

var isPromise = val => val && isFunction(val.then);

var getCookie = name => {
  let regex = new RegExp(
    '(^|(; ))' + // beginning of document.cookie, or "; " which signifies the beginning of a new cookie
    name +
    '=([^;]*)'); // the value of the cookie, matched up until a ";" or the end of the string

  let match = document.cookie.match(regex);
  let value = match && match[3];
  return value && decodeURIComponent(value)
};

var setCookie = (name, value, duration) => {
  if (duration === undefined) {
    // one year
    duration = (365 * 24 * 60 * 60 * 1000);
  }
  let date = duration;
  if (!(duration instanceof Date)) {
    date = duration < 0 ? null : new Date(new Date().getTime() + duration);
  }
  let str = [
    date ? `expires=${date.toGMTString()}` : '',
    `${name}=${encodeURIComponent(value)}`,
    `domain=${document.domain}`,
    'path=/',
    ''
  ].join('; ');
  document.cookie = str;
};

var removeCookie = name => setCookie(name, '', new Date(1));

export { isFunction, isObject, isArray, isString, isNan, isNull, isUndefined, isRegExp, isDate, isBoolean, isNumber, isAsync, isPromise, getCookie, setCookie, removeCookie };
