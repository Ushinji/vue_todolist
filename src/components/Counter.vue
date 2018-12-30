<template>
  <div>
    <h1>Hogeカウンター</h1>
    <div>{{ count }}</div>
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
};
</script>
