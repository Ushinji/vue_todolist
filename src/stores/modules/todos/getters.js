const getters = {
  getTodoById: state => id => state.todos.find(todo => todo.id === id),
};

export default getters;
