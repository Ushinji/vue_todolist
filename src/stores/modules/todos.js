const state = {
  currentId: 4,
  todos: [
    {
      id: 1,
      text: 'ランニングを30分行う',
      isDone: false,
    },
    {
      id: 2,
      text: '晩御飯の買い出しに行く',
      isDone: false,
    },
    {
      id: 3,
      text: '役所に住民票を届けに行く',
      isDone: false,
    },
  ],
};

const actions = {
  addToDo({ commit }, id, text) {
    commit('addTodo', {
      id,
      text,
      isDone: false,
    });
  },
};


const mutations = {
  add(state, todo) {
    state.todos.push(todo);
    state.currentId += 1;
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
