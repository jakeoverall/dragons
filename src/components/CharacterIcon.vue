<template>
  <div @click="selectCharacter" @mouseover="selectCharacter">
    <img :src="character.imgUrl" :alt="character.name" :title="character.name" :height="height" />
    <p>{{character.name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    character: { type: Object, required: true },
    height: { type: String, default: '65' },
    characterType: { type: String, required: true }
  },
  methods: {
    selectCharacter() {
      /// think about this
      // this.$store.dispatch('setCharacter', { type: this.characterType, data: this.character })
      this.$emit('blarg', this.character)
    }
  }
}
</script>

<style>
</style>