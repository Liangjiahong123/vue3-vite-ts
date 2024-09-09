import type { RouteRecordRaw, RouteMeta } from "vue-router";
import type { IconKey } from "@/components/common/IconView/iconMap";

// @ts-ignore
export interface AppRouteRaw extends Omit<RouteRecordRaw, "meta"> {
  meta?: AppRouteMeta;
  children?: AppRouteRaw[];
}

export interface AppRouteMeta extends RouteMeta {
  title?: string; // 标题
  icon?: IconKey; // 图标
  hideMenu?: boolean; // 是否在菜单中隐藏
  single?: boolean; // 是否仅有一级路由
  orderBy?: number; // 排序
  notTag?: boolean; // 是否生成标签
  activeMenu?: string; // 高亮菜单：一般在三级路由使用
}

export interface AppMenu {
  name?: string;
  icon?: IconKey;
  path: string;
  children?: AppMenu[];
  orderBy?: number;
}
