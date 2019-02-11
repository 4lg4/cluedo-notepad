import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = (window.s = (() => {
  const key = "__ALGA_CLUEDO_NOTEPAD__";
  const s = window.localStorage;

  const get = k => {
    const items = s.getItem(`${key}${k}`);

    if (items) {
      try {
        return JSON.parse(items);
      } catch (e) {
        console.error("Storage data broken", e);
        return null;
      }
    }

    return null;
  };

  const set = (k, data) => {
    try {
      s.setItem(`${key}${k}`, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return { get, set };
})());

const characters = [
  { name: "Green" },
  { name: "Mustard" },
  { name: "Orchid" },
  { name: "Peacock" },
  { name: "Plum" },
  { name: "Scarlet" }
];

const weapons = [
  { name: "Candlestick" },
  { name: "Dagger" },
  { name: "Lead Pipe" },
  { name: "Revolver" },
  { name: "Rope" },
  { name: "Wrench" }
];

const places = [
  { name: "Ballroom" },
  { name: "Billiard Room" },
  { name: "Conservatory" },
  { name: "Dining Room" },
  { name: "Hall" },
  { name: "Kitchen" },
  { name: "Library" },
  { name: "Lounge" },
  { name: "Study" }
];

export default new Vuex.Store({
  state: {
    user: {},
    players: storage.get("players") || [null, null, null, null, null],
    characters: storage.get("characters") || characters,
    weapons: storage.get("weapons") || weapons,
    places: storage.get("places") || places
  },
  getters: {
    isPlayersSet({ players }) {
      for (const player of players) {
        if (player) {
          return true;
        }
      }

      return false;
    }
  },
  mutations: {
    setPlayers(state, payload) {
      state.players = payload;
      storage.set("players", state.players);
    }
  },
  actions: {
    setPlayers({ commit }, payload) {
      commit("setPlayers", payload);
    }
  }
});
