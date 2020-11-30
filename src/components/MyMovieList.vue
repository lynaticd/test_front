<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="700px" @click:outside='hideModal'>
      <v-card>
        <v-card-title>My list</v-card-title>
        <v-divider></v-divider>
        <v-col cols="12">
          <div v-if="!movies || !movies[0]">No movies in the list</div>
          <v-list flat>
            <v-list-item-group color="primary">
              <v-list-item v-for="(movie, index) in movies" :key="movie.id">
                <MovieItemBlock :movie="movie" :itemIndex="index" />
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="hideModal"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import MovieItemBlock from "./MovieItemBlock.vue";

export default {
  name: "MyMovieList",
  components: {
    MovieItemBlock,
  },
  props: {
    show: {
      required: true,
    },
  },
  computed: {
    movies() {
      return this.$store.state.myList;
    },
  },
  methods: {
    hideModal() {
      this.$emit("close-modal");
    },
  },
  async mounted() {
    await this.$store.dispatch("getMyList");
  },
};
</script>
