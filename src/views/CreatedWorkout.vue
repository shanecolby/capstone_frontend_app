<template>
  <div class="CreatedWorkout">
    <h1>{{ message }}</h1>
    <!-- <div v-for="selected_exercise in selected_exercises"> -->
      <h1>{{selected_exercises}}</h1>
      <!-- <h1>{{selected_exercises.name}}</h1>
      <h1>{{selected_exercises.focus}}</h1>
      <h1>{{selected_exercises.image_url}}</h1> -->
      
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
      message: "Created Workout",
      selected_exercises: [],
      name: "",
      focus: "",
      image_url: "",
    };
  },
  created: function () {
    axios.get("/api/selected_exercises").then((response) => {
      console.log("selected exercises...");
      this.selected_exercises = response.data;
    });
  },
  methods: {
    createWorkout: function () {
      console.log("user workout...");
      axios.get("/api/selected_exercises").then((response) => {
        console.log(response.data);
        this.selected_exercises = response.data;
      });
    },
  },
};
</script>