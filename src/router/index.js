import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // meta: {protected},
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/members",
    name: "Members",
    component: () => import("../views/Members.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let routerAuthCheck = false;
  if (routerAuthCheck) {
    store.commit("SET_USER_IS_AUTHENTICATED", true);
  }
  // do our work
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if user Authenticated
    if (routerAuthCheck) {
      // User is authenticated
      // TODO: commit to store that the user is authenticated
      next();
    } else {
      // User is not authenticated
      router.push("/login");
    }
  } else {
    next();
  }
});

export default router;
