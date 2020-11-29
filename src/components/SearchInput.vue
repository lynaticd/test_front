<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            @keyup.enter="searchChange"
            v-model="searchValue"
            :rules="valueRules"
            label="Search for the movie"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "SearchInput",

  data: () => ({
    valid: false,
    searchValue: "",
    valueRules: [(v) => (/^[a-z\s]+$/i).test(v) || "Search is in English"],
  }),
  methods: {
    searchChange() {
      this.$emit("change-search", this.searchValue);
    },
  },
};
</script>
