import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage.vue';
import MyMovieList from '../components/MyMovieList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/list',
    name: 'MyList',
    component: MyMovieList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
