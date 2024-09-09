import Layout from "@/layouts/index.vue";
import { AppRouteRaw } from "@/router/types";

const SKILLS_MANAGEMENT_ROUTES: AppRouteRaw = {
  path: "/skillsManagement",
  redirect: "/skillsManagement/plugin",
  component: Layout,
  meta: { title: "技能管理", icon: "editPen", orderBy: 2 },
  children: [
    {
      path: "plugin",
      name: "PluginManagement",
      component: () => import("@/views/Background/SkillsManagement/PluginManagement/index.vue"),
      meta: { title: "插件管理" },
      children: [
        {
          path: "edit",
          name: "PluginManagement-edit",
          component: () =>
            import("@/views/Background/SkillsManagement/PluginManagement/EditPage.vue"),
          meta: {
            title: "插件管理-编辑",
            hideMenu: true,
            notTag: true,
            activeMenu: "/skillsManagement/plugin"
          }
        }
      ]
    },
    {
      path: "workFlow",
      name: "WorkFlowManagement",
      component: () => import("@/views/Background/SkillsManagement/WorkFlowManagement/index.vue"),
      meta: { title: "工作流管理" }
    }
  ]
};

export default SKILLS_MANAGEMENT_ROUTES;
