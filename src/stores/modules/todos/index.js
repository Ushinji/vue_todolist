import actions from './actions';
import mutations from './mutations';
import getters from './getters';

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

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
