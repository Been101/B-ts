import { AxiosPromise, AxiosResponse } from '../types/index';
import { AxiosRequireConfig } from '../types'
import xhr from './xhr'
import { buildURL } from '../helper/url'
import { transformRequest, transformResponse } from '../helper/data';
import { processHeaders } from '../helper/headers';

export default function dispatchRequest(config: AxiosRequireConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then((res: AxiosResponse) => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequireConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequireConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

function transformRequestData(config: AxiosRequireConfig): any {
  return transformRequest(config.data)
}

function transformResponseData(res: AxiosResponse): any {
  return transformResponse(res.data)
}

function transformHeaders(config: AxiosRequireConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}