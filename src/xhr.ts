import { AxiosRequireConfig, AxiosPromise, AxiosResponse } from './types/index'
import { parseHeaders } from './helper/headers';
export default function xhr(config: AxiosRequireConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, method = 'get', url, headers, responseType, timeout } = config
    const request = new XMLHttpRequest()
    if (responseType) {
      request.responseType = responseType
    }
    if (timeout) {
      request.timeout = timeout
    }

    request.open(method.toUpperCase(), url, true)

    Object.keys(headers).forEach(name => {
      if (!data && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }

      if (request.status === 0) {
        return
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response)
    }

    request.onerror = function handleError() {
      reject(new Error('Network Error!'))
    }

    request.ontimeout = function handleTimeout() {
      reject(new Error(`Timeout of ${timeout} ms exceeded!`))
    }

    function handleResponse(response: AxiosResponse): void {
      if (request.status >= 200 && request.status < 300) {
        resolve(response)
      } else {
        reject(`Request failed with status ${request.status}`)
      }
    }








    request.send(data)
  })
}
