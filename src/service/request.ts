import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios";

import type { CreateHttpOptions } from "./interCeptors";
import { ResponseData, RequestOptions } from "#/http";
import { isFunction } from "lodash-es";

export class HttpRequest {
  private instance: AxiosInstance;
  private readonly createOptions: CreateHttpOptions;

  constructor(options: CreateHttpOptions) {
    this.createOptions = options;
    this.instance = axios.create(options);

    this.setupInterceptors();
  }

  private setupInterceptors() {
    const { interceptors } = this.createOptions;
    if (!interceptors) return;
    const {
      requestInterceptor,
      responseInterceptor,
      handleReqInterceptorErrHook,
      handleResInterceptorErrHook
    } = interceptors;

    this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (isFunction(requestInterceptor)) {
        config = requestInterceptor(config);
      }
      return config;
    });

    isFunction(handleReqInterceptorErrHook) &&
      this.instance.interceptors.request.use(undefined, handleReqInterceptorErrHook);

    this.instance.interceptors.response.use((res: AxiosResponse) => {
      if (isFunction(responseInterceptor)) {
        res = responseInterceptor(res);
      }
      return res;
    });

    isFunction(handleResInterceptorErrHook) &&
      this.instance.interceptors.request.use(undefined, handleResInterceptorErrHook);
  }

  request<T = any>(config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> {
    const { handleResponseHook } = this.createOptions.interceptors || {};
    const reqOption = Object.assign({}, options);
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, AxiosResponse<ResponseData>>(config)
        .then((res) => {
          if (isFunction(handleResponseHook)) {
            try {
              const hres = handleResponseHook(res, reqOption);
              resolve(hres);
            } catch (err) {
              reject(err || "请求错误");
            }
          }

          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          reject(e);
        });
    });
  }

  get<T = any>(config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> {
    return this.request({ ...config, method: "GET" }, options);
  }

  post<T = any>(config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> {
    return this.request({ ...config, method: "POST" }, options);
  }
}
