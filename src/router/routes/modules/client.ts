import { AppRouteRaw } from "@/router/types";

const CLIENT_ROUTES: AppRouteRaw = {
  path: "/client",
  name: "Client",
  component: () => import("@/views/Client/index.vue"),
  meta: { title: "AI客户端", hideMenu: true }
};

export default CLIENT_ROUTES;
