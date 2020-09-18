import Vue from 'vue'
import Vuex from 'vuex'
import { dragonService } from './services/DragonService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: [],
    games: [],
    game: {},
  },
  mutations: {
    set(state, { type, data }) {
      state[type] = data
    }
  },
  actions: {
    getHomePageData({ dispatch }) {
      dispatch('getChampions')
      dispatch('getDragons')
      dispatch('getGames')
    },
    async getChampions({ commit }) {
      let champions = await dragonService.getChampions()
      commit('set', { type: 'champions', data: champions })
    },
    async getDragons({ commit }) {
      let dragons = await dragonService.getDragons()
      commit('set', { type: 'dragons', data: dragons })
    },
    async getGames({ commit }) {
      let games = await dragonService.getGames()
      commit('set', { type: 'games', data: games })
    },
    async getGame({ commit }, id) {
      let game = await dragonService.getGame(id)
      commit('set', { type: 'game', data: game })
    },
    async createGame({ commit }, { champion, dragon }) {
      let game = await dragonService.createGame(champion, dragon)
      commit('set', { type: 'game', data: game })
    },
    async attack({ commit }, { gameId, attack }) {
      let game = await dragonService.attack(gameId, attack)
      commit('set', { type: 'game', data: game })
    }
  },
  modules: {
  }
})
