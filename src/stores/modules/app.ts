import { defineStore } from "pinia";
import { store } from "@/stores";

interface AppStore {
  appInfo: Recordable;
  pageLoading: boolean;
}

export const useAppStore = defineStore("app", {
  state: (): AppStore => {
    return {
      appInfo: {},
      pageLoading: false
    };
  },
  getters: {
    getAppInfo: (state) => state.appInfo,
    getPageLoading: (state) => state.pageLoading
  },
  actions: {
    setPageLoading(payload: boolean) {
      this.pageLoading = payload;
    }
  }
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
