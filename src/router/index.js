import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import Workout from '../views/Workout.vue';
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ExercisesNew from "../views/ExercisesNew.vue";
import CreatedWorkout from "../views/CreatedWorkout"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exercises/new',
    name: 'exercises-new',
    component: ExercisesNew
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/createdworkout',
    name: 'CreatedWorkout',
    component: CreatedWorkout
  },
  // {
  //   path: '/workouts',
  //   name: 'Workout',
  //   component: Workouts
  // },
  // {
  //   path: '/workouts',
  //   name: 'My Workouts',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Workout.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
