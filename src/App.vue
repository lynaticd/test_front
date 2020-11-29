<template>
<v-app>
    <v-main>
      <MainPage />
    </v-main>
  </v-app>
</template>

<script>
import MainPage from './views/MainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
  },
};
</script>
