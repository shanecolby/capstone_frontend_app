<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="exercise in exercises">
      <h1>{{ exercise.name }}</h1>
      <h2>{{ exercise.focus }}</h2>
      <h3>{{ exercise.image_url }}</h3>
    </div>
    
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to WorkoutCaddy!",
      exercises: [
        { id: 1, name: "workout1", image_url: "www.google.com" },
        { id: 2, name: "workout2", image_url: "www.g.com" },
        { id: 3, name: "workout3", image_url: "www.goo3ee.com" },
      ],
    };
  },
  created: function () {
    axios.get("/api/exercises").then((response) => {
      console.log("exercise index...");
      this.exercises = response.data;
    });
  },
  methods: {},
};
</script>
