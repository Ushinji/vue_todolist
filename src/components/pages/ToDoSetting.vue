<template>
  <div class="todo-detail">
    <router-link to="/">ToDo一覧へ戻る</router-link>
    <h1>ToDo設定画面</h1>
  </div>
</template>

<script>
export default {
  name: 'ToDoDetatil',
};
</script>

<style>
.todo-detail {
  padding: 24px;
}

h1 {
  font-weight: normal;
}
</style>
