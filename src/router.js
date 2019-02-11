import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import NotepadModule from "./views/NotepadModule.vue";
import ConfigModule from "./views/ConfigModule.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: NotepadModule
    },
    {
      path: "/config",
      name: "config",
      component: ConfigModule
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((from, to, next) => {
  if (!store.getters.isPlayersSet && from.name !== "config") {
    return next({ name: "config" });
  }

  next();
});

export default router;
