import type { AppRouteRaw } from "../types";
import { RoutePath } from "@/enums/RouteEnum";

const ROOT_ROUTE: AppRouteRaw = { path: "/", redirect: RoutePath.REDIRECT };

const LOGIN_ROUTE: AppRouteRaw = {
  path: RoutePath.LOGIN,
  name: "Login",
  meta: { title: "登录" },
  component: () => import("@/views/Login/index.vue")
};

const modules = import.meta.glob("./modules/**/*.ts", { eager: true });

const routeModuleList: AppRouteRaw[] = [];
Object.keys(modules).forEach((key) => {
  const module = (modules[key] as Recordable).default || {};
  const moduleList = Array.isArray(module) ? [...module] : [module];
  routeModuleList.push(...moduleList);
});

export const basicRoutes: AppRouteRaw[] = [ROOT_ROUTE, LOGIN_ROUTE];

export const asyncRoutes: AppRouteRaw[] = [...routeModuleList];
