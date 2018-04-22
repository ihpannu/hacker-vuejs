import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import CreateLink from "./components/CreateLink.vue";
import LinkList from "./components/LinkList.vue";
import AppLogin from "./components/AppLogin.vue";
import Search from "./components/Search.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/",
      name: "linklist",
      component: LinkList
    },
    {
      path: "/create",
      name: "create",
      component: CreateLink
    },
    {
      path: "/login",
      name: "login",
      component: AppLogin
    },
    {
      path: "/search",
      name: "search",
      component: Search
    }
  ],
  mode: "history"
});
