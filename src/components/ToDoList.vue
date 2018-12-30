<template>
  <div>
    <h1>ToDoList</h1>
    <input v-model="inputText"/>
    <button v-on:click="addItem">追加する</button>
    <li v-for="item in listItems" v-bind:key="item.id">{{ item.text }}</li>
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
  }
}
</script>



