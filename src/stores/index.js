import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import countModule from './modules/count';

Vue.use(Vuex);

const store = new Vuex.Store(
  countModule,
);

export default store;
