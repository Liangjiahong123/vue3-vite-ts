/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_API_BASEPATH: string;
  readonly VITE_BASE_PATH: string;
  readonly VITE_DROP_DEBUGGER: string;
  readonly VITE_DROP_CONSOLE: string;
  readonly VITE_SOURCEMAP: string;
  readonly VITE_OUT_DIR: string;
}
