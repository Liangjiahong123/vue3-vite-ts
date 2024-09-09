import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";
import type { AppRouteMeta } from "@/router/types";

export interface RouteInfo extends Omit<RouteLocationNormalizedLoadedGeneric, "meta"> {
  meta?: AppRouteMeta;
}
export interface TagItem {
  name?: RouteInfo["name"];
  path: string;
  title?: string;
}
