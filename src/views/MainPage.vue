<template>
  <v-container>
    <div v-infinite-scroll="changePage" infinite-scroll-distance="10">
      <SearchInput v-on:change-search="searchMovies" />
      <ButtonGroup
        :activeFilter="activeFilter"
        v-on:change-filter="changeFilter"
      />
      <FavMoviesList />
      <v-container>
        <v-row justify="center">
          <v-col cols="4" v-for="movie in movies" :key="movie.id">
            <MovieCard :movie="movie" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import infiniteScroll from "vue-infinite-scroll";
import SearchInput from "../components/SearchInput.vue";
import ButtonGroup from "../components/ButtonGroup.vue";
import MovieCard from "../components/MovieCard.vue";
import FavMoviesList from "../components/FavMoviesList.vue";

export default {
  name: "MainPage",
  components: {
    SearchInput,
    ButtonGroup,
    MovieCard,
    FavMoviesList,
  },
  data: () => ({
    page: 1,
    justify: ["space-between"],
    activeFilter: "popular",
    search: "",
  }),
  directives: {
    infiniteScroll,
  },
  computed: {
    movies() {
      return this.$store.state.moviesList;
    },
  },
  methods: {
    async changeFilter(value) {
      this.activeFilter = value;
      this.page = 1;
      await this.$store.dispatch("getMoviesList", {
        filter: this.activeFilter,
        page: this.page,
      });
    },
    async changePage() {
      this.page += 1;
      if (this.search.length !== 0) {
        await this.$store.dispatch("searchForMovie", {
          searchValue: this.search,
          page: this.page,
          append: true,
        });
      } else {
        await this.$store.dispatch("getMoviesList", {
          filter: this.activeFilter,
          page: this.page,
          append: true,
        });
      }
    },
    async searchMovies(value) {
      this.search = value;
      await this.$store.dispatch("searchForMovie", {
        searchValue: this.search,
        page: this.page,
        append: false,
      });
    },
  },
  async mounted() {
    await this.$store.dispatch("getMoviesList", {
      filter: this.activeFilter,
      page: this.page,
      append: false,
    });
  },
};
</script>
