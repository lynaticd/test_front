<template>
  <v-col cols="12" class="py-2">
    <v-btn-toggle tile color="deep-purple accent-3" group>
      <v-btn @click="change('popular')"> Popular </v-btn>
      <v-btn @click="change('upcoming')"> Upcoming </v-btn>
      <v-btn @click="change('top_rated')"> Top rated </v-btn>
      <v-btn @click="change('latest')">Latest</v-btn>
    </v-btn-toggle>
  </v-col>
</template>

<script>
export default {
  name: "ButtonGroup",
  props: {
    activeFilter: {
      requered: true,
    },
  },
  data() {
    return {
      icon: "justify",
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
    };
  },
  methods: {
    change(val) {
      this.$emit("change-filter", val);
    },
  },
};
</script>
