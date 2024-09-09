import Layout from "@/layouts/index.vue";
import { AppRouteRaw } from "@/router/types";

const KNOWLEDGE_BASE_ROUTES: AppRouteRaw = {
  path: "/knowledgeBase",
  component: Layout,
  meta: { single: true, icon: "notebook", title: "知识库", orderBy: 3 },
  children: [
    {
      path: "",
      name: "KnowledgeBase",
      component: () => import("@/views/Background/KnowledgeBase/index.vue")
    }
  ]
};

export default KNOWLEDGE_BASE_ROUTES;
