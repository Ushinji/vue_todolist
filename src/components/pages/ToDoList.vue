<template>
  <div class="todo-list">
    <router-link to="/">トップページへ戻る</router-link>
    <h1>ToDoList</h1>
    <InputText
      v-model="newTodoText"
      placeholder="(例) 30分ランニングを行う"
      v-on:keydown.enter="addItem"
    />
    <ul v-if="todos.length">
      <ToDoListItem
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
        v-on:click="updateItem"
      />
    </ul>
    <p v-else>ToDoはありません！</p>
  </div>
</template>

<script>
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
    addItem() {
      if (!this.newTodoText) {
        alert('ToDoの内容を入力してください。'); // eslint-disable-line no-alert
        return;
      }
      this.todos.push({
        id: this.currentId,
        text: this.newTodoText,
        isDone: false,
      });
      this.currentId += 1;
      this.newTodoText = '';
    },
    updateItem(id, text, isDone) {
      const index = this.todos.findIndex(
        item => item.id === id,
      );
      if (index === -1) {
        throw new Error('Item Not found');
      }
      this.todos.splice(index, 1, {
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
