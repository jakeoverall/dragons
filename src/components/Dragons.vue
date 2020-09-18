<template>
  <div>
    <div class="d-flex">
      <character-icon
        v-for="dragon in dragons"
        :key="dragon.id"
        :character="dragon"
        height="120"
        @blarg="setDragon"
        characterType="dragon"
        class="m-1"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dragons() {
      return this.$store.state.dragons
    }
  },
  methods: {
    setDragon(dragon) {
      // this.$store.dispatch('setDragon', dragon)
    }
  }
}
</script>

<style>
</style>