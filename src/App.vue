<template>
  <!--<div id="app">-->
  <!--<div id="nav">-->
  <!--<router-link to="/">Home</router-link> |-->
  <!--<router-link to="/about">About</router-link>-->
  <!--</div>-->
  <!--<router-view />-->
  <!--</div>-->

  <v-app id="app" dark>
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
    <v-toolbar app fixed clipped-left>
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title>Cluedo Notepad</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span
        >{{ new Date().getFullYear() }} -
        <a href="www.alga.me" target="_blank">Alga.me</a></span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    // source: String
  }
};
</script>

<style>
@import "../node_modules/vuetify/dist/vuetify.min.css";
</style>
