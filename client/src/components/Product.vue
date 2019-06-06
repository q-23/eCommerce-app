<template>
  <v-layout id="main">
    <v-flex
            xs12
            sm6
            offset-sm3>
      <v-card>

        <v-card-title
                primary-title
                @click.stop="dialog = true"
        >
          <slot
                  name="image">
          </slot>
          <div id="texts">
            <slot name="brand"></slot>
            <slot name="id"></slot>
          </div>
        </v-card-title>

        <v-dialog
                v-model="dialog"
                max-width="500"
        >
          <v-card>
            <slot
                    name="image"></slot>
            <v-card-title
                    bold
                    class="headline">{{brand}}</v-card-title>
            <v-card-title
                    class="headline">{{name}}</v-card-title>
            <v-card-text>
              <span v-html="description"></span>
            </v-card-text>

            <v-card-actions
            >
              <v-flex>
                <v-text-field
                        type="number"
                        label="Quantity"
                        v-model="quantity"
                ></v-text-field>
              </v-flex>
              <v-btn  @click="this.addToCart"
                      flat
                      color="indigo">Add to cart</v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>

        <v-card-actions
        id="actions"
        >
          <v-flex>
            <v-text-field
                    type="number"
                    label="Quantity"
                    v-model="quantity"
            ></v-text-field>
          </v-flex>
          <v-btn  @click="this.addToCart"
                  flat
                  color="indigo">Add to cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

  export default {
    data: () => ({
      dialog: false,
      quantity: '',
      items: 0
    }),
    props: {
      description: String,
      name: String,
      brand: String,
      idNr: String
    },
    methods: {
      addToCart(){
          if(this.cart.hasOwnProperty(this.idNr)) {
            this.$store.dispatch('addQuantity', {id: this.idNr, count: this.quantityInt});
          } else {
            this.$store.dispatch('addToCart', {id: this.idNr, name: this.name, count: this.quantityInt})
          }
          this.quantity = ''
      }
    },
    computed: {
      quantityInt(){
        return parseInt(this.quantity)
      },
      cart(){
        return this.$store.state.cart
      }
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
  #texts{
    cursor: pointer;
  }
</style>
