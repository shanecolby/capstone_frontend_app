<template>
  <div class="home">
    <!-- Main -->
					<div id="main">

						<!-- Featured Post -->
							<article class="post featured">
								<header class="major">
									<!-- <span class="date">April 25, 2017</span> -->
									<h3>View all of our community exercises below</h3><h3>select your favorite exercises to create your own workout</h3>
								</header>
								<a href="#" class="image main"><img src="images/mainpageworkoutpic.jpg" alt="" /></a>
								<!-- <ul class="actions special">
									<li><a href="#" class="button large">Full Story</a></li> -->  
								<!-- </ul> -->
                <h3>Search Focus:<br> (Arms,Back,Chest,Core,Full Body,Legs)<input type="text" v-model="searchTerm"> </h3>
                <!-- <div v-for="exercise in filterBy(exercises, searchTerm, 'focus')"></div> -->



							</article>
              
						<!-- Posts -->
							<section class="posts">
								<article v-for="exercise in filterBy(exercises, searchTerm, 'focus')">
									<header>
										<span class="date">{{exercise.id}}</span>
										<h3>{{exercise.name}}<br />{{exercise.focus}}</a></h3>
									</header>
									<a class="image fit"><img v-bind:src="exercise.image_url" alt="" /></a>
									<!-- <ul class="actions special">
										<li><a href="#" class="button">Full Story</a></li> -->
                          <button v-on:click="addToWorkout(exercise.id)">Add Exercise to Workout</button>
                          
                           <!-- <button v-on:click="destroyExercise(exercise.id)">Remove Exercise</button> -->
                      <!-- </ul> -->
								</article>
        
							</section>
          </div>
    <!-- <h1>{{ message }}</h1>

    <h1>User id? {{ $parent.getUserId() }}</h1>
    <h1>User id of exercise? {{ $parent.getUserId() }}</h1>


    <h4> Select exercises below to create a workout </h4>
    <hr> -->

    <!-- <h2>Create an exercise</h2>
    <p>Exercise name:<input type="text" v-model="name"></p>
    <p>Primary focus:<input type="text" v-model="focus"></p>
    <p>Image URL:<input type="text" v-model="image_url"></p>

    <button v-on:click="createExercise()">Create exercise</button> --> 
    <!-- <button v-on:click="exercisesIndex()">Show Exercises</button>
    <h2>View/add exercise to workout</h2>
    <!-- <button v-on:click="createWorkout()">View created workout</button> -->
<!--   
    <div v-for="exercise in exercises">
    <p>Search Focus (arms,legs,chest,core,back): <input type="text" v-model="searchTerm"> </p>
    <div v-for="exercise in orderBy(filterBy(exercises, searchTerm, 'focus'), 'name')">
    <div v-for="exercise in orderBy(exercises, 'name')">

<!-- 
      <h1>{{ exercise.id }}</h1>
      <h1>{{ exercise.name }}</h1>
      <h2>{{ exercise.focus }}</h2>
      <p><img v-bind:src="exercise.image_url" v-bind:alt="exercise.name"></p> -->
      <!-- <button v-on:click="exercisesShow()">Show Exercise</button> -->
      <!-- <br> -->
      <!-- <button v-on:click="addToWorkout(exercise.id)">Add Exercise to Workout</button> -->
      <!-- <h3>{{ exercise.image_url }}</h3> -->
      <!-- <br> -->
    
    
      <!-- <p v-if="getUserId() === exercise.user_id">User should be able to edit this</p> -->
      <!-- <router-link v-if="$parent.getUserId() == exercise.user_id" v-bind:to="`/exercises/${exercise.id}/delete`">Delete</router-link> -->
      <!-- <button v-if="$parent.getUserId() == exercise.user_id" v-on:click="destroyExercise()">Remove Exercise</button> -->

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
      // console.log("exercise index...");
      this.exercises = response.data;
    });
  },
  methods: {
    exercisesIndex: function () {
      console.log("exercises index...");
      axios.get("/api/exercises").then((response) => {
        // console.log(response.data);
        this.exercises = response.data;
      });
    },
    createExercise: function () {
      // console.log("creating exercise...");
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
    addToWorkout: function (workout_id) {
      // console.log("creating workout...");
      console.log(workout_id);

      var params = {
        exercise_id: workout_id,
      };
      axios.post("/api/selected_exercises", params).then((response) => {
        // console.log(response.data);
      });
    },
    destroyExercise: function () {
      console.log("removing exercise...");
      axios
        .delete("/api/exercises/" + this.currentExercise.id)
        .then((response) => {
          // console.log(response.data);
        });
    },
  },
};
</script>
