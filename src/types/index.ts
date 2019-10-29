import { Axios, AxiosRequireConfig } from './index';
export type Method =
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'get'
  | 'GET'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'patch'
  | 'PATCH'

export interface AxiosRequireConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequireConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {

}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequireConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

export interface Axios {
  request(config: AxiosRequireConfig): AxiosPromise
  get(url: string, config?: AxiosRequireConfig): AxiosPromise
  head(url: string, config?: AxiosRequireConfig): AxiosPromise
  delete(url: string, config?: AxiosRequireConfig): AxiosPromise
  options(url: string, config?: AxiosRequireConfig): AxiosPromise
  post(url: string, data?: any, config?: AxiosRequireConfig): AxiosPromise
  put(url: string, data?: any, config?: AxiosRequireConfig): AxiosPromise
  patch(url: string, data?: any, config?: AxiosRequireConfig): AxiosPromise
}

export interface AxiosInstance extends Axios {
  (config: AxiosRequireConfig): AxiosPromise
}
