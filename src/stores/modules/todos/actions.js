const actions = {
  add({ commit }, { id, text }) {
    commit('set', {
      id,
      text,
      isDone: false,
    });
  },

  update({ commit }, { id, text, isDone }) {
    commit('set', {
      id,
      text,
      isDone,
    });
  },
};

export default actions;
