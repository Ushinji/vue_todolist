<template>
  <div class="counter">
    <router-link to="/">トップページへ戻る</router-link>
    <h1>カウンター</h1>
    <div>{{ count }}</div>
    <button v-on:click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
      message: '',
    };
  },
  methods: {
    increment() {
      this.count += 1;
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

