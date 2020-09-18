import axios from 'axios'

const dragonApi = axios.create({
  baseURL: "https://drag-vs-champ.herokuapp.com/api/"
})


class DragonService {
  async getChampions() {
    let res = await dragonApi.get('champions')
    return res.data
  }
  async getDragons() {
    let res = await dragonApi.get('dragons')
    return res.data
  }
  async getGames() {
    let res = await dragonApi.get('games')
    return res.data
  }
  /**
   * @param {string} id
   */
  async getGame(id) {
    let res = await dragonApi.get('games/' + id)
    return res.data
  }

  /**
   * use champion and dragon id
   * @param {string} champion
   * @param {string} dragon
   */
  async createGame(champion, dragon) {
    let res = await dragonApi.post('games/', { champion, dragon })
    return res.data
  }

  /**
   * @param {string} gameId
   * @param {string} attack
   */
  async attack(gameId, attack) {
    let res = await dragonApi.put('games/' + gameId, { attack })
    return res.data
  }

}

export const dragonService = new DragonService()