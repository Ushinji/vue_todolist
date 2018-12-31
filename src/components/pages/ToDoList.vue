<template>
  <div class="todo-list">
    <h1>ToDoList</h1>
    <InputText
      v-model="inputText"
      placeholder="(例) 30分ランニングを行う"
      v-on:keydown.enter="addItem"
    />
    <ul v-if="listItems.length">
      <ToDoListItem
        v-for="todo in listItems"
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
import ToDoListItem from '../molecules/ToDoListItem';

export default {
  name: 'ToDoList',
  components: {
    InputText,
    ToDoListItem,
  },
  data() {
    return {
      currentId: 1,
      inputText: '',
      listItems: [],
    };
  },
  methods: {
    addItem() {
      if (!this.inputText) {
        alert('ToDoの内容を入力してください。'); // eslint-disable-line no-alert
        return;
      }
      this.listItems.push({
        id: this.currentId,
        text: this.inputText,
        isDone: false,
      });
      this.currentId += 1;
      this.inputText = '';
    },
    updateItem(id, text, isDone) {
      const index = this.listItems.findIndex(
        item => item.id === id,
      );
      if (index === -1) {
        throw new Error('Item Not found');
      }
      this.listItems.splice(index, 1, {
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
  padding: 64px 128px;
}
</style>
