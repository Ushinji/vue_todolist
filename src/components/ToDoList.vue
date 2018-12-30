<template>
  <div>
    <h1>ToDoList</h1>
    <input v-model="inputText"/>
    <button v-on:click="addItem">追加する</button>
    <li v-for="item in listItems" v-bind:key="item.id">
      <input type="checkbox" v-on:click="updateItem(item.id, item.text, !item.isDone)">
      {{ item.text }} {{item.isDone}}
    </li>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
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
      if(index === -1) {
        throw new Error('Item Not found');
      };
      this.listItems.splice(index, 1, {
        id,
        text,
        isDone,
      });
    },
  }
}
</script>
