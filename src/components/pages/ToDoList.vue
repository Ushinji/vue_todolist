<template>
  <div class="todo-list">
    <router-link to="/">トップページへ戻る</router-link>
    <h1>ToDoList</h1>
    <InputText
      v-model="newTodoText"
      placeholder="(例) 30分ランニングを行う"
      v-on:keydown.enter="addTodo"
    />
    <ul v-if="todos.length">
      <ToDoListItem
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
        v-on:click="updateToDo"
      />
    </ul>
    <p v-else>ToDoはありません！</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import InputText from '../atoms/InputText';
import ToDoListItem from '../organisms/ToDoListItem';

export default {
  name: 'ToDoList',
  components: {
    InputText,
    ToDoListItem,
  },
  data() {
    return {
      newTodoText: '',
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    },
  },
  methods: {
    ...mapActions('todos', [
      'add',
      'update',
    ]),
    addTodo() {
      const text = this.newTodoText.trim();
      if (!text) {
        alert('ToDoの内容を入力してください。'); // eslint-disable-line no-alert
        return;
      }
      this.add({
        id: this.$store.state.todos.currentId,
        text,
      });
      this.newTodoText = '';
    },
    updateToDo(id, text, isDone) {
      this.update({
        id,
        text,
        isDone,
      });
    },
  },
};
</script>

<style>
.todo-list {
  padding: 24px;
}

h1 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
