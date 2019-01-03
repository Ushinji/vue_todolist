<template>
  <div>
    <h1>Hogeカウンター</h1>
    <div>{{ count }}</div>
    <button v-on:click="increment">+</button>
    <input v-model="message" />
    <div>{{message}}</div>
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
