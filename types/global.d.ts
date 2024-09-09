declare type Nullable<T> = T | null;
declare type Recordable<T = any> = Record<string, T>;
declare type TimeoutFn = ReturnType<typeof setTimeout>;
declare type IntervalFn = ReturnType<typeof setInterval>;
declare type Fn<R = any> = (...args: any[]) => R;
declare type PromiseFn<R = any> = (...args: any[]) => Promise<R>;

declare type Equals<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

declare type AxiosHeaders =
  | "application/json"
  | "application/x-www-form-urlencoded"
  | "multipart/form-data";

declare type AxiosMethod = "get" | "post" | "delete" | "put";

declare type AxiosResponseType = "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";

declare interface AxiosConfig {
  params?: any;
  data?: any;
  url?: string;
  method?: AxiosMethod;
  headersType?: string;
  responseType?: AxiosResponseType;
}

declare interface IResponse<T = any> {
  code: number | string;
  data: T extends any ? T : T & any;
}
