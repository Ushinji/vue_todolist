<template>
  <div class="todo-list">
    <h1>ToDoList</h1>
    <InputText 
      v-model="inputText"
      placeholder="(例) 30分ランニングを行う"
      @keydown.enter="addItem"
    />
    <template v-for="item in listItems">
      <li 
        v-bind:key="item.id" 
        v-bind:class="[
        { 
          'todo-list--item--is-done': item.isDone
        },
         'todo-list--item']"
      >
        <input type="checkbox" v-on:click="updateItem(item.id, item.text, !item.isDone)">
        {{ item.text }}
      </li>
    </template>
  </div>
</template>

<script>
import InputText from '../atoms/InputText';

export default {
  name: 'ToDoList',
  components: {
		InputText
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
      if(!this.inputText) {
        alert('ToDoの内容を入力してください。');
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
        item => item.id === id
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

.todo-list--item {
  list-style: none;
  font-size: 20px;
}

.todo-list--item--is-done {
  text-decoration: line-through;
}
</style>
