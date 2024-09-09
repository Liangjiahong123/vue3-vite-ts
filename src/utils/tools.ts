export class ImgUtils {
  private constructor() {}

  static getAssetsImg(imgUrl: string) {
    const path = new URL("../assets/img/", import.meta.url).href;
    return `${path}/${imgUrl}`;
  }
}

export class FPUtils {
  private constructor() {}

  static pipe(...funcs: Fn[]) {
    function callback(input: any, func: Fn) {
      return func(input);
    }

    return function <R = any>(params: any): R {
      return funcs.reduce(callback, params) as unknown as R;
    };
  }
}
