import { AxiosRequireConfig } from './types/index'
export default function xhr(config: AxiosRequireConfig): void {
  const { data = null, method = 'get', url, headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  Object.keys(headers).forEach(name => {
    if (!data && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  request.send(data)
}
