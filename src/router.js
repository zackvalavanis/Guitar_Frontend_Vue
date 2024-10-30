import { createWebHistory, createRouter } from 'vue-router'

import GuitarsIndex from "./components/GuitarsIndex.vue";
import GuitarsNew from "./components/GuitarsNew.vue";

const routes = [
  {path: '/GuitarsIndex', component: GuitarsIndex },
  {path: '/GuitarsNew', component: GuitarsNew }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;