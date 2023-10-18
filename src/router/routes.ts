import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "PageNotFound",
  //   component: () => import(""),
  // },
  {
    path: "/",
    name: 'result',
    component: () => import("./../pages/result/index.vue"),
  },
];
