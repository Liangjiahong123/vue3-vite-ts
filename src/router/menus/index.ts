import type { AppMenu, AppRouteRaw } from "../types";
import { cloneDeep } from "lodash-es";
import { asyncRoutes } from "../routes";
import { FPUtils } from "@/utils/tools";

export function getMenus(): AppMenu[] {
  return FPUtils.pipe(filterMenus, createMenu, sortMenu)(asyncRoutes);
}

function filterMenus(routes: AppRouteRaw[]) {
  if (!routes) return [];
  return routes.filter((item) => !item.meta?.hideMenu);
}

function createMenu(routes: AppRouteRaw[]) {
  if (!routes) return [];
  const cloneRoutes = cloneDeep(routes);
  return cloneRoutes.map((item) => {
    const { title, icon, single, orderBy } = item.meta || {};
    const menu: AppMenu = { name: title, icon, path: item.path, orderBy };
    menu.children = single ? [] : FPUtils.pipe(filterMenus, createMenu)(item.children);
    return menu;
  });
}

function sortMenu(menus: AppMenu[]) {
  if (!menus) return [];
  const sortMenu = cloneDeep(menus);
  sortMenu.sort((a, b) => (a.orderBy ?? 0) - (b.orderBy ?? 0));
  return sortMenu;
}
