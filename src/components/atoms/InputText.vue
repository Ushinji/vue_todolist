<template>
  <input
    type="text"
    class="input"
    v-bind:value="value"
    v-on="listeners"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      };
    },
  },
};
</script>

<style>
.input {
  font-size: 14px;
  width: 100%;
  padding: 8px 10px;
}
</style>
