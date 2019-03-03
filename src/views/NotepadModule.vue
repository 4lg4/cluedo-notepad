<template>
  <VFlex row>
    <v-data-table
      :headers="headers"
      :items="weapons"
      :totalItems="10"
      :rowsPerPage="-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td
          v-for="(a, index) in new Array(players.length + 1)"
          :key="`weapons-${index}`"
          class="cell"
          @click="
            setAnswer({ answer: 'weapons', name: props.item.name, index })
          "
        >
          <VIcon>{{ answers.weapons[props.item.name][index] }}</VIcon>
        </td>
      </template>
    </v-data-table>
    <br />

    <v-data-table
      :headers="headers"
      :items="places"
      class="elevation-1"
      :totalItems="10"
      :rowsPerPage="-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td
          v-for="(a, index) in new Array(players.length + 1)"
          :key="`places-${index}`"
          class="cell"
          @click="setAnswer({ answer: 'places', name: props.item.name, index })"
        >
          <VIcon>{{ answers.places[props.item.name][index] }}</VIcon>
        </td>
      </template>
    </v-data-table>
    <br />

    <v-data-table
      :headers="headers"
      :items="characters"
      class="elevation-1"
      :totalItems="10"
      :rowsPerPage="-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td
          v-for="(a, index) in new Array(players.length + 1)"
          :key="`characters-${index}`"
          class="cell"
          @click="
            setAnswer({ answer: 'characters', name: props.item.name, index })
          "
        >
          <VIcon>{{ answers.characters[props.item.name][index] }}</VIcon>
        </td>
      </template>
    </v-data-table>
  </VFlex>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NotepadModule",
  components: {},
  data() {
    return {
      one: true,
      two: true,
      three: true
      // answers: {},
    };
  },
  computed: {
    ...mapState(["players", "characters", "weapons", "places", "answers"]),
    headers() {
      const headers = this.players.map(p => ({
        text: p,
        value: p,
        sortable: false
      }));
      headers.unshift({ text: "", value: "me", sortable: false });
      headers.unshift({ text: "", value: "*", sortable: false });
      return headers;
    }
  },
  methods: {
    ...mapActions(["setAnswer"])
  },
  created() {
    // console.log("created notepad");
  }
};
</script>

<style>
.cell {
  cursor: pointer;
}
</style>
