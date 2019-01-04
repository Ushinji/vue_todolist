import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';
import todos from './modules/todos/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    count,
    todos,
  },
});

export default store;
