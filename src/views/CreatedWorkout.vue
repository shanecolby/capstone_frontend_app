<template>
  <div class="CreatedWorkout">
    <h1>{{ message }}</h1>
    <br>
    <div v-for="selected_exercise in selected_exercises" class=>
      <h2>{{selected_exercise.exercise.name}}</h2>
      <h2>{{selected_exercise.exercise.focus}}</h2>
      <button v-on:click="destroyWorkout(selected_exercise)">Remove Exercise</button>
      <a class="image fit"><img v-bind:src="selected_exercise.exercise.image_url" alt="" /></a>
      <br>


      <!-- <!-- <h1>{{selected_exercises.name}}</h1> -->
      <!-- <h1>{{selected_exercises.focus}}</h1> -->
      <!-- <h1>{{selected_exercises.image_url}}</h1>  -->

        <!-- <p v-if="getUserId() === selected_exercises.user_id">User should be able to edit this</p>
      <router-link v-if="$parent.getUserId() == selected_exercises.user_id" v-bind:to="`/selected_exercises/${selected_exercise.id}/delete`">Delete</router-link>
      <button v-if="$parent.getUserId() == selected_exercise.user_id" v-on:click="destroyWorkout()">Remove Exercise</button> -->
      
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
      message: "My Workout",
      selected_exercises: [],
      name: "",
      focus: "",
      image_url: "",
    };
  },
  created: function () {
    axios.get("/api/selected_exercises").then((response) => {
      // console.log("selected exercises...");
      this.selected_exercises = response.data;
    });
  },
  methods: {
    createWorkout: function () {
      // console.log("user workout...");
      axios.get("/api/selected_exercises").then((response) => {
        console.log(response.data);
        this.selected_exercises = response.data;
      });
    },
    destroyWorkout: function (selected_exercise) {
      // console.log("removing workout...");
      axios
        .delete("/api/selected_exercises/" + selected_exercise.id)
        .then((response) => {
          console.log(response.data);
          var index = this.selected_exercises.indexOf(selected_exercise);
          this.selected_exercises.splice(index, 1);
        });
    },
  },
};
</script>