<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <h4>Name:</h4> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <h4>Email:</h4>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <h4>Password:</h4>
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="form-group">
        <h4>Password confirmation:</h4>
        <input type="password" class="form-control" v-model="passwordConfirmation">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>