<template>
  <div>
    <div v-for="game in games" :key="game.id">
      <div class="game" :class="{over: game.gameOver}">
        <character-icon :character="game.dragon" characterType="dragon" />
        <span style="margin: 0 1rem">VS</span>
        <character-icon :character="game.champion" characterType="champion" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    games() {
      return this.$store.state.games
    }
  }
}
</script>

<style>
.game {
  display: flex;
  align-items: center;
  justify-content: center;
}
.over {
  background: red;
}
</style>