import type { Router } from "vue-router";
import { APP_TITLE } from "@/constants/appConfig";

export function setupRouterGuards(router: Router) {
  createDocumentTitleGuard(router);
  createRedirectGuard(router);
}

function createRedirectGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    if (from.fullPath === "/" && to.meta.activeMenu) {
      next(to.meta.activeMenu);
      return;
    }
    next();
  });
}

function createDocumentTitleGuard(router: Router) {
  router.afterEach((to) => {
    if (to.meta.title) {
      document.title = (to.meta.title as string) || APP_TITLE;
    }
  });
}
