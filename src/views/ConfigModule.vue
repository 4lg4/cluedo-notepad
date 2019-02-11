<template>
  <div class="ConfigModule">
    <h2>Players</h2>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 v-for="(player, index) in thePlayers" :key="index">
            <v-text-field
              :label="`Player ${index + 1}`"
              single-line
              v-model="thePlayers[index]"
              @input="theSetPlayers"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ConfigModule",
  components: {},
  data() {
    return {
      thePlayers: []
    };
  },
  computed: {
    ...mapState(["players"])
  },
  created() {
    this.thePlayers = this.players;
  },
  methods: {
    ...mapActions(["setPlayers"]),
    theSetPlayers() {
      this.setPlayers(this.thePlayers);
    }
  }
};
</script>
