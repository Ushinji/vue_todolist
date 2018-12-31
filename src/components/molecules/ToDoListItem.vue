<template>
  <div>
    <input type="checkbox" v-on:click="$emit('click', todo.id, todo.text, !todo.isDone)">
    {{ todo.text }}
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>

</style>

