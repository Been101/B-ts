import { AxiosRequestConfig, AxiosResponse } from './../types/index';
class AxiosError extends Error {
  isAxiosError: boolean
  code?: string | null
  request?: any
  config: AxiosRequestConfig
  response?: AxiosResponse
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)
    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype) // 兼容处理， 继承内置的类时像 Error, Array, Map， 不能调用方法或 instenceof will return false 的bug
  }
}

export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
) {
  const error = new AxiosError(message, config, code, request, response)
  return error
}