import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/components/layout/index.vue";
import Home from "@/pages/home/index.vue";
import Search from "@/pages/search/index.vue";
import Detail from "@/pages/detail/index.vue";
import User from "@/pages/user/index.vue";
import Setting from "@/pages/user/setting.vue";
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
          path: "/search",
          name: "search",
          meta: {
            parent: "search",
          },
          component: Search,
        },
        {
          path: "/detail/:id",
          name: "detail",
          meta: {
            parent: "detail",
          },
          component: Detail,
        },
        {
          path: '/user/:id',
          name: 'user',
          meta: {
            parent: 'user',
          },
          component: User,
        },
        {
          path: '/user/:id/setting',
          name: 'setting',
          meta: {
            parent: 'user',
          },
          component: Setting,
        }
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
