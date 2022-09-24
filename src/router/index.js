import { createRouter, createWebHistory } from "vue-router";
import EqSystemView from "../views/EqSystemView.vue";
import NotFound from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "EqSystemView",
    component: EqSystemView,
  },
  {
    path: "/quadratic",
    name: "quadratic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/QuadraticEqView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
