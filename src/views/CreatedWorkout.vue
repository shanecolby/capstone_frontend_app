<template>
  <div class="CreatedWorkout">
    <h1>{{ message }}</h1>
    <!-- <div v-for="selected_exercise in selected_exercises">
    </div> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Created Workout!",
    };
  },
  created: function () {
    axios.get("/api/selected_exercises").then((response) => {
      console.log("selected exercises...");
      this.selected_exercises = response.data;
    });
  },
  methods: {},
};
</script>