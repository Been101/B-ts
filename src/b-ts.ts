import { AxiosRequireConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helper/url'
import { transformRequest } from './helper/data';
import { processHeaders } from './helper/headers';

export default function axios(config: AxiosRequireConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequireConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequireConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequireConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequireConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}