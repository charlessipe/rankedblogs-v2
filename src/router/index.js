import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Meetings from "../views/Meetings.vue";
import Register from "../views/Register.vue";
import Baking from "../views/Baking.vue";
import OnlineMarketing from "../views/OnlineMarketing.vue";
import Quilting from "../views/Quilting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/meetings",
    name: "meetings",
    component: Meetings
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/baking",
    name: "baking",
    component: Baking
  },
  {
    path: "/online-marketing",
    name: "online-marketing",
    component: OnlineMarketing
  },
  {
    path: "/quilting",
    name: "quilting",
    component: Quilting
  },
  {
    path: "*",
    redirect: '/'
  },

];

const router = new VueRouter({
  routes
});

export default router;
