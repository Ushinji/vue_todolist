<template>
  <div class="counter">
    <router-link to="/">トップページへ戻る</router-link>
    <h1>カウンター</h1>
    <div>{{ $store.getters.count }}</div>
    <button v-on:click="increment">+</button>
  </div>
</template>

<script>
import INCREMENT from '../../stores/mutationTypes';

export default {
  name: 'Counter',
  methods: {
    increment() {
      this.$store.commit(INCREMENT);
    },
  },
};
</script>

<style scoped>
.counter {
  padding: 24px;
}

h1 {
  font-weight: normal;
};
</style>

