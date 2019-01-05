<template>
  <div class="todo-detail">
    <router-link to="/">ToDo一覧へ戻る</router-link>
    <h1>ToDo設定画面</h1>
    <InputText v-model="inputText" />
    <button v-on:click="handleClick">編集する</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import InputText from '../atoms/InputText';

export default {
  name: 'ToDoDetatil',
  components: {
    InputText,
  },
  props: { id: Number },
  data() {
    return {
      inputText: '',
    };
  },
  computed: {
    todo() {
      return this.$store.getters['todos/getTodoById'](this.id);
    },
  },
  methods: {
    ...mapActions('todos', [
      'update',
    ]),
    handleClick() {
      const text = this.inputText.trim();
      if (!text) {
        alert('ToDoの内容を入力してください。'); // eslint-disable-line no-alert
        return;
      }
      this.update({
        id: this.todo.id,
        text,
        isDone: this.todo.isDone,
      });
    },
  },
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
