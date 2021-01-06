<template>
  <div class="workout">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function () {
    return {
      message: "My Workout",
      selected_exercises: [],
    };
  },
  created: function () {},
  methods: {},
};
</script>