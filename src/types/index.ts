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

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequireConfig
  request: any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {

}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequireConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

export interface Axios {
  request<T = any>(config: AxiosRequireConfig): AxiosPromise<T>
  get<T = any>(url: string, config?: AxiosRequireConfig): AxiosPromise<T>
  head<T = any>(url: string, config?: AxiosRequireConfig): AxiosPromise<T>
  delete<T = any>(url: string, config?: AxiosRequireConfig): AxiosPromise<T>
  options<T = any>(url: string, config?: AxiosRequireConfig): AxiosPromise<T>
  post<T = any>(url: string, data?: any, config?: AxiosRequireConfig): AxiosPromise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequireConfig): AxiosPromise<T>
  patch<T = any>(url: string, data?: any, config?: AxiosRequireConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequireConfig): AxiosPromise<T>
  <T = any>(url: string, config?: AxiosRequireConfig): AxiosPromise<T>
}

export interface AxiosInterceptorManager<T> {
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number
  eject(id: number): void
}

export interface ResolvedFn<T = any> {
  (val: T): T | Promise<T>
}

export interface RejectedFn {
  (error: any): any
}