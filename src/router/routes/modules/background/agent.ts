import Layout from "@/layouts/index.vue";
import { AppRouteRaw } from "@/router/types";

const AGENT_ROUTES: AppRouteRaw = {
  path: "/agent",
  component: Layout,
  meta: { single: true, icon: "user", title: "智能体", orderBy: 1 },
  children: [
    {
      path: "",
      name: "Agent",
      component: () => import("@/views/Background/Agent/index.vue")
    }
  ]
};

export default AGENT_ROUTES;
