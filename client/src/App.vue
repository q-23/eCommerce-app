<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Staples</span>
        <span class="font-weight-light">eCommerce App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab dark color="indigo">
        <v-icon dark>shopping_cart</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Product/>
    </v-content>
  </v-app>
</template>

<script>
import Product from './components/Product'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Product
  },
  data () {
    return {
      //
    }
  }

}
</script>
