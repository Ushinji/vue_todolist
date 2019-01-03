<template>
  <li
    v-bind:class="[
      { 'todo-list--item--is-done': todo.isDone },
        'todo-list--item'
    ]">
    <input
      type="checkbox"
      v-on:click="$emit('click', todo.id, todo.text, !todo.isDone)"
    />
    {{ todo.text }}
    <router-link :to="`/todos/${ todo.id }`">カウンター</router-link>
  </li>
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
.todo-list--item {
  list-style: none;
  font-size: 20px;
}

.todo-list--item--is-done {
text-decoration: line-through;
}
</style>

