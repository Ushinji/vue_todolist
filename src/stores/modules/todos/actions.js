const actions = {
  add({ commit }, { id, text }) {
    commit('add', {
      id,
      text,
      isDone: false,
    });
  },
};

export default actions;
