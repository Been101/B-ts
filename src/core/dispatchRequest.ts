import { AxiosPromise, AxiosResponse } from '../types/index';
import { AxiosRequestConfig } from '../types'
import xhr from './xhr'
import { buildURL } from '../helper/url'
import { transformRequest, transformResponse } from '../helper/data';
import { processHeaders } from '../helper/headers';

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  throwIfCancellationRequested(config)
  return xhr(config).then((res: AxiosResponse) => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformResponseData(res: AxiosResponse): any {
  return transformResponse(res.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function throwIfCancellationRequested(config: AxiosRequestConfig): void {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested()
  }
}