<template>
  <v-layout id="main">
    <v-flex xs12 sm4 offset-sm4>
      <v-card>
        <v-img
                src="https://i.imgur.com/zYcibjw.jpg"
                aspect-ratio="1.33"
                @click.stop="dialog = true"
        ></v-img>

        <v-card-title
                primary-title
                @click.stop="dialog = true"
        >
          <div>
            <h3 class="headline mb-0">{{title}}</h3>
            <h4 class=" mb-0">ID: {{id}}</h4>
          </div>
        </v-card-title>

        <v-dialog
                v-model="dialog"
                max-width="290"
        >
          <v-card>
            <v-card-title class="headline">{{title}}</v-card-title>

            <v-card-text>
              {{description}}
            </v-card-text>

          </v-card>
        </v-dialog>

        <v-card-actions
        id="actions"
        >
          <v-flex>
            <v-text-field
                    label="Quantity"
                    v-model="quantity"
            ></v-text-field>
          </v-flex>
          <v-btn flat color="indigo" @click="this.test">Add to cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      img: '',
      title: 'Blekk BROTHER LC1280XLC blå',
      id: '774944',
      description: '<p><b>Få optimale utskriftsresultater, tydelig tekst og levende grafikk med Brother LC1280XLC-blekkpatronen i cyan.</b></p><p>Denne Brother LC1280XLC-blekkpatronen i cyan med stor kapasitet produserer levende, stilige resultater i utskrifter av høy kvalitet. Blekket er laget for optimal bruk med ulike Brother-maskiner og har flekkbestandig blekk som ikke falmer, for svært holdbare utskrifter. Denne blekkpatronen i cyan har en kapasitet på opptil 1200 sider.</p><li>Farge: Cyan</li><li>Kapasitet: Opptil 1200 A4-sider </li><li>Enkel å installere og skifte ut</li><li>Flekkbestandig og falmer ikke</li><li>Gir tekst og bilder med utmerket kvalitet</li><li>Se kompatibilitetsoversikten for passende maskiner</li>',
      quantity: ''
    }),
    methods: {
      fetchItems() {
        this.$store.dispatch('loadData');
      }
    },
    computed: {
      products(){
        return this.$store.state.products
      }
    },
    created(){
      this.fetchItems()
    }
  }
</script>

<style>
  #main{
    margin-top: 30px;
  }
  #actions{
    margin-left: 10px;
  }
</style>
