<template>
  <div class="create">
    <h1>{{ message }}</h1>
    <!-- <h2>Create an exercise</h2>
    <p>Exercise name:<input type="text" v-model="name"></p>
    <p>Primary focus:<input type="text" v-model="focus"></p>
    <p>Image URL:<input type="text" v-model="image_url"></p>

    <button v-on:click="createExercise()">Create exercise</button> -->
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
    };
  },
  created: function () {},
  methods: {
  //   createExercise: function () {
  //     console.log("creating exercise...");
  //     var params = {
  //       name: this.name,
  //       focus: this.focus,
  //       image_url: this.image_url,
  //     };
  //     axios.post("/api/exercises", params).then((response) => {
  //       console.log(response.data);
  //       this.exercises.push(response.data);
  //     });
  // },
};
</script>