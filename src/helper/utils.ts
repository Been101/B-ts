const toString = Object.prototype.toString

export function isDate(date: any): date is Date {
  return toString.call(date) === '[object, Date]'
}

export function isObject(obj: any): obj is Date {
  return toString.call(obj) === '[object, Object]'
}

export function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2c/g, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
