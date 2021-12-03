<template>
  <div class="div h-screen bg-bg-main flex flex-col justify-center">
    <NFTCard />
  </div>
</template>

<script>
import NFTCard from './components/card.vue'

export default {
  name: 'App',
  components: {
    NFTCard
  }
}
</script>

<style scoped>
* {
  font-family: 'Outfit', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
