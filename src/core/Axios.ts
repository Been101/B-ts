import { AxiosPromise, AxiosRequireConfig } from '../types/index';
import dispatchRequest from './dispatchRequest';

export default class Axios {
  request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }
    return dispatchRequest(config)
  }
  get(url: string, config: AxiosRequireConfig): AxiosPromise {
    return this._requestMethodWithoutData('get', url, config)
  }

  delete(url: string, config: AxiosRequireConfig): AxiosPromise {
    return this._requestMethodWithoutData('delete', url, config)
  }

  head(url: string, config: AxiosRequireConfig): AxiosPromise {
    return this._requestMethodWithoutData('head', url, config)
  }

  options(url: string, config: AxiosRequireConfig): AxiosPromise {
    return this._requestMethodWithoutData('options', url, config)
  }

  post(url: string, data?: any, config?: AxiosRequireConfig): AxiosPromise {
    return this._requestMethodWithData('options', url, data, config)
  }

  patch(url: string, data?: any, config?: AxiosRequireConfig): AxiosPromise {
    return this._requestMethodWithData('patch', url, data, config)
  }

  _requestMethodWithoutData(method: string, url: string, config?: AxiosRequireConfig) {
    return this.request(Object.assign(config || {}, {
      method,
      url
    }))
  }

  _requestMethodWithData(method: string, url: string, data?: any, config?: AxiosRequireConfig) {
    return this.request(Object.assign(config || {}, {
      method,
      url,
      data
    }))
  }



}