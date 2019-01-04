const mutations = {
  add(state, todo) {
    state.todos.push(todo);
    state.currentId += 1;
  },
};

export default mutations;
