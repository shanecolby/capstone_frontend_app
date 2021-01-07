<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h4> Select exercises below to create a workout </h4>
    <hr>

    <!-- <h2>Create an exercise</h2>
    <p>Exercise name:<input type="text" v-model="name"></p>
    <p>Primary focus:<input type="text" v-model="focus"></p>
    <p>Image URL:<input type="text" v-model="image_url"></p>

    <button v-on:click="createExercise()">Create exercise</button> --> 
    <!-- <button v-on:click="exercisesIndex()">Show Exercises</button>
    <h2>View/add exercise to workout</h2>
    <!-- <button v-on:click="createWorkout()">View created workout</button> -->
<!--   
    <div v-for="exercise in exercises"> -->
    <p>Search Focus (arms,legs,chest,core,back): <input type="text" v-model="searchTerm"> </p>
    <div v-for="exercise in orderBy(filterBy(exercises, searchTerm, 'focus'), 'name')">
    <!-- <div v-for="exercise in orderBy(exercises, 'name')"> -->


   
      <h1>{{ exercise.name }}</h1>
      <h2>{{ exercise.focus }}</h2>
      <p><img v-bind:src="exercise.image_url" v-bind:alt="exercise.name"></p>
      <!-- <button v-on:click="exercisesShow()">Show Exercise</button> -->
      <br>
      <button v-on:click="exercisesIndex()">Add Exercise to Workout</button>
      <!-- <h3>{{ exercise.image_url }}</h3> -->
      <br>
      <button v-on:click="destroyExercise()">Remove Exercise</button>

      <hr>
    </div>
    
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Welcome to WorkoutCaddy!",
      exercises: [],
      searchTerm: "",
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
        focus: this.focus,
        image_url: this.image_url,
      };
      axios.post("/api/exercises", params).then((response) => {
        console.log(response.data);
        this.exercises.push(response.data);
      });
    },
    createWorkout: function () {
      console.log("creating workout...");
      axios.post("/api/selected_exercises").then((response) => {
        console.log(response.data);
      });
    },
    destroyExercise: function () {
      console.log("removing exercise...");
      axios
        .delete("/api/exercises/" + this.currentExercise.id)
        .then((response) => {
          console.log(response.data);
        });

      // })
    },
  },
};
</script>
