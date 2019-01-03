const state = {
  count: 0,
};

const mutations = {
  increment(state) {
    state.count += 1;
  },
};

const getters = {
  count(state) {
    return state.count;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
