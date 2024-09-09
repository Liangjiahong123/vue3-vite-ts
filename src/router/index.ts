import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes, asyncRoutes } from "./routes";

const routes = [...basicRoutes, ...asyncRoutes] as RouteRecordRaw[];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export function setupRouter(app: App) {
  app.use(router);
}
