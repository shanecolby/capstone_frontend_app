<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <hr>
    <h2>Create an exercise</h2>
    <p>Exercise name:<input type="text" v-model="name"></p>
    <p>Primary focus:<input type="text" v-model="focus"></p>
    <p>Image URL:<input type="text" v-model="image_url"></p>

    <button v-on:click="createExercise()">Create exercise</button>
    <!-- <button v-on:click="exercisesIndex()">Show Exercises</button> -->
  
    <div v-for="exercise in exercises">
   
      <h1>{{ exercise.name }}</h1>
      <h2>{{ exercise.focus }}</h2>
      <p><img v-bind:src="exercise.image_url" v-bind:alt="exercise.name"></p>
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
      name: "",
      focus: "",
      image_url: "",
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
    createExercise: function () {
      console.log("creating exercise...");
      var params = {
        name: this.name,
        focus: "all",
        image_url: "google",
      };
      axios.post("/api/exercises", params).then((response) => {
        console.log(response.data);
        this.exercises.push(response.data);
      });
    },
  },
};
</script>
