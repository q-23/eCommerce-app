<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <router-view></router-view>
      <component v-bind:is="activeComponent"></component>
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
    }
  }

}
</script>

<style>

</style>