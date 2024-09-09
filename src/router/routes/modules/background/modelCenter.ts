import Layout from "@/layouts/index.vue";
import { AppRouteRaw } from "@/router/types";

const MODEL_CENTER_ROUTES: AppRouteRaw = {
  path: "/modelCenter",
  redirect: "/modelCenter/management",
  component: Layout,
  meta: { title: "模型中心", icon: "menu", orderBy: 4 },
  children: [
    {
      path: "fineTuning",
      name: "FineTuning",
      component: () => import("@/views/Background/ModelCenter/ModelFineTuning/index.vue"),
      meta: { title: "模型微调" }
    },
    {
      path: "management",
      name: "management",
      component: () => import("@/views/Background/ModelCenter/ModelManagement/index.vue"),
      meta: { title: "模型管理" }
    }
  ]
};

export default MODEL_CENTER_ROUTES;
