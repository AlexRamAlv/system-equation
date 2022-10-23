import { createRouter, createWebHistory } from "vue-router";
import EqSystemView from "../views/EqSystemView.vue";
import NotFound from "../views/NotFoundView.vue";
import QuadraticEqView from "../views/QuadraticEqView.vue";

const routes = [
  {
    path: "/",
    name: "EqSystemView",
    component: EqSystemView,
  },
  {
    path: "/quadratic",
    name: "quadratic",
    component: QuadraticEqView,
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
