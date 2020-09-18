<template>
  <div class="home">
    <section>
      <div>
        <champions />
      </div>
      <div>
        <dragons />
      </div>
    </section>
    <section>
      <div>
        <games />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('getHomePageData')
  }
}
</script>
