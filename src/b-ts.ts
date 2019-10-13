import { AxiosRequireConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helper/url'

export default function axios(config: AxiosRequireConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequireConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequireConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
