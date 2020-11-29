import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { config } from './constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moviesList: [],
    myList: [],
  },
  mutations: {
    setMoviesList(state, { data, append }) {
      // console.log(data, append, 'DATA');
      if (data.results) {
        if (append) {
          console.log(state.moviesList, 'list');
          const appendedList = state.moviesList.concat(data.results);
          state.moviesList = appendedList;
          return;
        }
        state.moviesList = data.results;
      } else {
        state.moviesList = [data];
      }
    },
    setMyList(state, data) {
      state.myList = data;
    },
    updateList(state, id) {
      console.log(id, 'ID');
      const index = state.myList.indexOf(id);
      if (index > -1) {
        state.myList.splice(index, 1);
      }
    },
  },
  actions: {
    getMoviesList({ commit }, { filter, page, append }) {
      axios
        .get(`${config.endpoint}movie/${filter}?api_key=${config.apiKey}&page=${page}`)
        .then((res) => commit('setMoviesList', { data: res.data, append }));
    },
    searchForMovie({ commit }, searchValue, page) {
      axios
        .get(`${config.endpoint}discover/movie?api_key=${config.apiKey}&language=ru&include_adult=false&with_keywords=${searchValue}&page=${page}`)
        .then((res) => commit('setMoviesList', res.data.results));
    },
    addMovieToList({ commit }, movieData) {
      axios
        .post(`${config.myServer}/movies/create`, movieData)
        .then((res) => commit('setMyList', res.data));
    },
    getMyList({ commit }) {
      axios
        .get(`${config.myServer}/movies/list`)
        .then((res) => commit('setMyList', res.data.list));
    },
    removeItem({ commit }, id) {
      axios
        .delete(`${config.myServer}/movies/delete_item/${id}`)
        .then(() => commit('updateList', id));
    },
  },
});
