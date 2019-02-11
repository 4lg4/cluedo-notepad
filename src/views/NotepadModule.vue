<template>
  <!--<div class="NotepadModule">-->
  <!--<v-form>-->
  <!--<v-container>-->
  <!--<v-layout row wrap>-->
  <!--<v-flex xs4 v-for="(player, index) in players" :key="index">-->
  <!--{{player}}-->
  <!--</v-flex>-->
  <!--</v-layout>-->
  <!--</v-container>-->
  <!--</v-form>-->
  <!--<img alt="Vue logo" src="../assets/logo.png" />-->

  <!--<v-btn flat v-if="$route.path !== '/'" @click="navigate('home')"-->
  <!--&gt;<v-icon light>arrow_back_ios</v-icon></v-btn-->
  <!--&gt;-->
  <!--</div>-->
  <!--<v-container grid-list-xl>-->
  <!--<v-layout>-->
  <v-flex>
    <v-card>
      <!--<v-toolbar color="teal" dark style="width: 100%;">-->
      <!--&lt;!&ndash;<v-toolbar-side-icon></v-toolbar-side-icon>&ndash;&gt;-->

      <!--<v-toolbar-title>Topics</v-toolbar-title>-->

      <!--<v-spacer></v-spacer>-->

      <!--&lt;!&ndash;<v-btn icon>&ndash;&gt;-->
      <!--&lt;!&ndash;<v-icon>more_vert</v-icon>&ndash;&gt;-->
      <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
      <!--</v-toolbar>-->

      <v-list>
        <v-list-group :key="1" v-model="two" prepend-icon="build" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Who</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-for="character in characters" :key="character.name">
            <v-list-tile-content>
              <v-list-tile-title>{{ character.name }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-group :key="2" v-model="three" prepend-icon="place" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Who</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-for="character in characters" :key="character.name">
            <v-list-tile-content>
              <v-list-tile-title>{{ character.name }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-group :key="3" v-model="one" prepend-icon="people" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Who</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-for="character in characters" :key="character.name">
            <v-list-tile-content>
              <v-list-tile-title>{{ character.name }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-card>
  </v-flex>
  <!--</v-layout>-->
  <!--</v-container>-->

  <!--<v-layout align-center justify-center row fill-height>-->
  <!--&lt;!&ndash;<v-flex 12>&ndash;&gt;-->
  <!--<v-card>-->
  <!--<v-toolbar color="teal" dark style="width: 100%;">-->
  <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->

  <!--<v-toolbar-title>Topics</v-toolbar-title>-->

  <!--<v-spacer></v-spacer>-->

  <!--<v-btn icon>-->
  <!--<v-icon>more_vert</v-icon>-->
  <!--</v-btn>-->
  <!--</v-toolbar>-->

  <!--<v-list>-->
  <!--<v-list-group-->
  <!--:key="1"-->
  <!--v-model="one"-->
  <!--prepend-icon="people"-->
  <!--no-action-->
  <!--&gt;-->
  <!--<v-list-tile slot="activator">-->
  <!--<v-list-tile-content>-->
  <!--<v-list-tile-title>Who</v-list-tile-title>-->
  <!--</v-list-tile-content>-->
  <!--</v-list-tile>-->

  <!--<v-list-tile-->
  <!--v-for="character in characters"-->
  <!--:key="character.name"-->
  <!--@click=""-->
  <!--&gt;-->
  <!--<v-list-tile-content>-->
  <!--<v-list-tile-title>{{ character.name }}</v-list-tile-title>-->
  <!--</v-list-tile-content>-->

  <!--<v-list-tile-action>-->
  <!--<v-icon>settings</v-icon>-->
  <!--</v-list-tile-action>-->
  <!--</v-list-tile>-->
  <!--</v-list-group>-->
  <!--</v-list>-->
  <!--</v-card>-->
  <!--&lt;!&ndash;</v-flex>&ndash;&gt;-->
  <!--</v-layout>-->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NotepadModule",
  components: {},
  data() {
    return {
      one: true,
      two: true,
      three: true
    };
  },
  computed: {
    ...mapState(["players", "characters"])
  },
  created() {
    console.log("created people", this.people);
  }
};
</script>
