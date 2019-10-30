import { AxiosPromise, AxiosRequireConfig } from '../types/index';
import dispatchRequest from './dispatchRequest';

export default class Axios {
  request(config: AxiosRequireConfig): AxiosPromise {
    return dispatchRequest(config)
  }
  get(url: string, config: AxiosRequireConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'get',
      url
    }))
  }
  delete(url: string, config: AxiosRequireConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'delete',
      url
    }))
  }



}