<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img height="250" :src="config.imageUrl + movie.poster_path"></v-img>
    <v-card-title>{{ movie.title }}</v-card-title>
    <v-card-text>{{ year }}</v-card-text>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="movie.vote_average"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
          length="10"
        ></v-rating>
        <div class="grey--text ml-4">{{ movie.vote_average }}</div>
      </v-row>
      <div :style="overviewStyle">{{ movie.overview }}</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple accent-3" text @click="addMovieToList">
        <v-icon color="purple" large> mdi-checkbox-marked-circle </v-icon>
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { config } from "../store/constants";

export default {
  name: "MovieCard",
  props: {
    movie: {
      requered: true,
    },
  },
  data: () => ({
    loading: false,
    selection: 1,
    config,
    overviewStyle: {
      height: "150px",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  }),
  computed: {
    year() {
      if (this.movie && this.movie.release_date) {
        const releaseDate = this.movie.release_date;
        const year = new Date(releaseDate).getFullYear();
        return year;
      }
      return "No release date";
    },
  },
  methods: {
    async addMovieToList() {
      console.log(this.movie, "I ADD MOVIES");
      await this.$store.dispatch("addMovieToList", this.movie);
    },
  },
};
</script>
