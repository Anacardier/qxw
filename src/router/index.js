import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Detail from "@/pages/detail";
const router = createRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/home",
          name: "home",
          meta: {
            parent: "home",
          },
          component: Home,
        },
        {
          path: "/detail/:id",
          name: "detail",
          meta: {
            parent: "detail",
          },
          component: Detail,
        },
      ],
    },
  ],
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  next();

  // if (to.path == '/') {
  //   next(false)
  // } else {
  //   next()
  // }
});

export default router;
