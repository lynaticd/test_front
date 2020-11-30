<template>
  <div :style="boxStyle">
    <label class="col-sm-1 control-label">{{ itemIndex + 1 }}</label>
    <img
      height="200"
      :src="
        movie.posterPath
          ? config.imageUrl + movie.posterPath
          : 'http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fview%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26CurrentPage%3D1'
      "
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
    <v-btn icon color="deep-purple accent-3" @click="deleteItem(itemIndex)">
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
      console.log(this.$store.state.myList, "!!!!!");
    },
  },
};
</script>
