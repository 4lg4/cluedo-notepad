<template>
  <!--<div id="app">-->
  <!--<div id="nav">-->
  <!--<router-link to="/about">About</router-link>-->
  <!--</div>-->
  <!--<router-view />-->
  <!--</div>-->

  <v-app id="app" dark class="AlgaCluedoNotepad">
    <!--<v-navigation-drawer-->
    <!--v-model="drawer"-->
    <!--app-->
    <!--&gt;-->
    <!--<v-list dense>-->
    <!--<v-list-tile @click="">-->
    <!--<v-list-tile-action>-->
    <!--<v-icon>dashboard</v-icon>-->
    <!--</v-list-tile-action>-->
    <!--<v-list-tile-content>-->
    <!--<v-list-tile-title>Dashboard</v-list-tile-title>-->
    <!--</v-list-tile-content>-->
    <!--</v-list-tile>-->
    <!--<v-list-tile @click="">-->
    <!--<v-list-tile-action>-->
    <!--<v-icon>settings</v-icon>-->
    <!--</v-list-tile-action>-->
    <!--<v-list-tile-content>-->
    <!--<v-list-tile-title>Settings</v-list-tile-title>-->
    <!--</v-list-tile-content>-->
    <!--</v-list-tile>-->
    <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <v-toolbar app fixed clipped-left class="toolbar">
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title
        ><router-link to="/" class="router-link"
          >Cluedo Notepad</router-link
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- TODO: refactor this logic -->
        <v-btn flat v-if="$route.path !== '/'" @click="navigate('home')"
          ><v-icon light>arrow_back_ios</v-icon></v-btn
        >
        <v-btn flat v-if="$route.path !== '/config'" @click="navigate('config')"
          ><v-icon light>settings</v-icon></v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="body App__body">
        <router-view />
      </v-container>
    </v-content>
    <!--<v-footer app fixed>-->
    <!--<span-->
    <!--&gt;{{ new Date().getFullYear() }} - -->
    <!--<a href="www.alga.me" target="_blank">Alga.me</a></span-->
    <!--&gt;-->
    <!--</v-footer>-->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    // source: String
  },
  methods: {
    navigate(module) {
      this.$router.push({ name: module });
    }
  }
};
</script>

<style>
@import "../node_modules/vuetify/dist/vuetify.min.css";
a {
  text-decoration: none;
}

.AlgaCluedoNotepad .body {
  align-items: flex-start;
}

.AlgaCluedoNotepad .router-link {
  color: #ffffff;
}

  .App__body {
    padding: 0;
  }
</style>
