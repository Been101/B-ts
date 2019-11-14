import { ResolvedFn, RejectedFn } from "../types";

interface Interceptor<T> {
  resolved: ResolvedFn
  Rejected?: RejectedFn
}

export default class InterceptorManager<T> {
  private interceptors: Array<Interceptor<T>>

  constructor() {
    this.interceptors = []
  }
}