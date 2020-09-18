<template>
  <div>
    <div v-if="selected.imgUrl">
      <img :src="selected.imgUrl" height="200" />
      <p>{{selected.name}}</p>
    </div>
    <div class="d-flex">
      <div v-for="champion in champions" :key="champion.id" class="m-1">
        <character-icon
          :character="champion"
          height="120"
          @blarg="setChampion"
          characterType="champion"
          class="m-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: {}
    }
  },
  computed: {
    champions() {
      return this.$store.state.champions
    }
  },
  methods: {
    setChampion(champion) {
      this.selected = champion
      // this.$store.dispatch('setDragon', champion)
    }
  }
}
</script>

<style>
.d-flex {
  display: flex;
}
.m-1 {
  margin: 1rem;
}
</style>