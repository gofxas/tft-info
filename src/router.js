import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/index"),
    },
    {
      path: "/hex",
      name: "Hex",
      component: () => import("./views/hex"),
    },
    {
      path: "/relation",
      name: "Relation",
      component: () => import("./views/index2"),
    },
    {
      path: "/relation2",
      name: "Relation",
      component: () => import("./views/index3"),
    },
    {
      path: "/equip",
      name: "Equip",
      component: () => import("./views/equip"),
    },
    {
      path: "/equip2",
      name: "Equip2",
      component: () => import("./views/equip2"),
    },
    {
      path: "/chess",
      name: "Chess",
      component: () => import("./views/chess"),
    },
    {
      path: "/chess2",
      name: "Chess2",
      component: () => import("./views/chess2"),
    },
  ],
});

export default router;
