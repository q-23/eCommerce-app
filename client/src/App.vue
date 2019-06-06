<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <transition
              mode="out-in"
              name="fade">
      <router-view></router-view>
      </transition>
      <component
              v-bind:is="activeComponent"
              v-if="this.route==='/'"></component>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import Return from './components/Return'
export default {
  name: 'App',
  components: {
    Navbar,
    Pagination,
    Return
  },
  computed: {
    activeComponent(){
      return this.$store.state.activeComponent
    },
    route(){
      return this.$route.path
    }
  }
}
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .4s;
  }

  .fade-leave-active {
    transition: opacity .4s;
    opacity: 0;
  }
</style>