const mutations = {
  set(state, todo) {
    const index = state.todos.findIndex(
      item => item.id === todo.id,
    );
    if (index === -1) {
      state.todos.push(todo);
      state.currentId += 1;
    } else {
      state.todos.splice(index, 1, todo);
    }
  },
};

export default mutations;
