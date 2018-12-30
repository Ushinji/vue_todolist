<template>
  <div>
    <h1>Hogeカウンター</h1>
    <div>{{ count }}</div>
    <button v-on:click="handleClick">+</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick: () => {
      alert("クリックが押されました!");
    },
  },
};
</script>
