import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Layout from '@/components/layout/index.vue';
import Home from '@/pages/home/index.vue';
const router = createRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: Layout,
      children: [{
        path: "/home",
        name: "home",
        meta: {
          parent: "home",
        },
        component: Home,
      }]
    }
  ],
  history: createWebHashHistory(),
})

router.beforeEach((to, from, next) => {
  next()

  // if (to.path == '/') {
  //   next(false)
  // } else {
  //   next()
  // }
})

export default router