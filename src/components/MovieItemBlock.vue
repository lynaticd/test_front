<template>
  <div :style="boxStyle">
    <label class="col-sm-1 control-label">{{ itemIndex + 1 }}</label>
    <img
      height="200"
      :src="config.imageUrl + movie.posterPath"
      alt="no poster"
    />
    <div :style="dataStyle">
      <div>{{ movie.title }} ({{ movie.year }})</div>
      <div :style="ratingBox">
        {{ movie.rating }}
        <v-rating
          half-increments
          length="10"
          readonly
          size="18"
          color="deep-purple accent-3"
          :value="Number(movie.rating)"
        ></v-rating>
      </div>
      <div>{{ movie.overview }}</div>
    </div>
    <v-btn icon color="deep-purple accent-3" @click="deleteItem(movie.id)">
      <v-icon>mdi-close-thick</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { config } from "../store/constants";

export default {
  name: "MovieItemBlock",
  props: {
    movie: {
      requered: true,
    },
    itemIndex: {
      requered: true,
    },
  },
  data: () => ({
    config,
    boxStyle: {
      display: "flex",
      flexDirection: "row",
    },
    dataStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: "10px",
    },
    itemStyle: {
      margin: "0",
    },
    ratingBox: {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
    },
  }),
  computed: {},
  methods: {
    async deleteItem(id) {
      console.log(id, "id");
      await this.$store.dispatch("removeItem", id);
    },
  },
};
</script>
