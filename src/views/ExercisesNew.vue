<template>
  <div class="create">
    <h1>{{ message }}</h1>
    <h4>Exercise name:<input type="text" v-model="name"></h4>
    <h4>Primary focus:<input type="text" v-model="focus"></h4>
    <h4>Image URL:<input type="text" v-model="image_url"></h4>
    <br>
    <button v-on:click="createExercise()">Create exercise</button>
  
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Create Exercise",
      name: "",
      focus: "",
      image_url: "",
    };
    this.$router.push("/");
  },
  created: function () {},
  methods: {
    createExercise: function () {
      // console.log("creating exercise...");
      var params = {
        name: this.name,
        focus: this.focus,
        image_url: this.image_url,
      };
      axios.post("/api/exercises", params).then((response) => {
        // console.log(response.data);
        // this.exercises.push(response.data);
        this.$router.push("/");
      });
    },
  },
};
</script>