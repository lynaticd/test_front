<template>
  <div :style="buttonStyle">
    <v-btn color="deep-purple" @click="hidden = !hidden"> My list </v-btn>
    <MyMovieList v-if="!hidden" />
  </div>
</template>

<script>
import MyMovieList from "./MyMovieList.vue";

export default {
  components: {
    MyMovieList,
  },
  name: "FavMoviesList",
  data: () => ({
    hidden: true,
    buttonStyle: {
      position: "sticky",
      top: "20px",
      zIndex: "9",
      display: "flex",
      justifyContent: "flex-end",
    },
  }),
};
</script>
