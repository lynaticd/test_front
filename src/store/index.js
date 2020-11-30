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
      console.log(data, append, 'DATA');
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
    updateList(state, index) {
      console.log(state.myList, "myListBefore");
      state.myList.splice(index, 1);
      console.log(state.myList, "myListAfter");
    },
  },
  actions: {
    getMoviesList({ commit }, { filter, page, append }) {
      axios
        .get(`${config.endpoint}movie/${filter}?api_key=${config.apiKey}&page=${page}`)
        .then((res) => commit('setMoviesList', { data: res.data, append }));
    },
    searchForMovie({ commit }, { searchValue, page, append }) {
      axios
        .get(`${config.endpoint}search/movie?api_key=${config.apiKey}&include_adult=false&query=${searchValue}&page=${page}`)
        .then((res) => commit('setMoviesList', { data: res.data, append }));
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
