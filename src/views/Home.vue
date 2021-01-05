<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <hr>
    <!-- <button v-on:click="exercisesIndex()">Show Exercises</button> -->
  
    <div v-for="exercise in exercises">
   
      <h1>{{ exercise.name }}</h1>
      <h2>{{ exercise.focus }}</h2>
      <p><img v-bind:src="exercise.image_url"></p>
      <button v-on:click="exercisesShow()">Show Exercise</button>
      <br>
      <button v-on:click="exercisesIndex()">Add Exercise to Workout</button>
      <!-- <h3>{{ exercise.image_url }}</h3> -->
      <hr>
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
      exercises: [],
    };
  },
  created: function () {
    axios.get("/api/exercises").then((response) => {
      console.log("exercise index...");
      this.exercises = response.data;
    });
  },
  methods: {
    exercisesIndex: function () {
      console.log("exercises index...");
      axios.get("/api/exercises").then((response) => {
        console.log(response.data);
        this.exercises = response.data;
      });
    },
  },
};
</script>
