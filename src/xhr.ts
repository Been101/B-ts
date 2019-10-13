import { AxiosRequireConfig } from './types/index'
export default function xhr(config: AxiosRequireConfig): void {
  const { data = null, method = 'get', url } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
