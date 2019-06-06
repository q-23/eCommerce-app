<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="cart"
                class="elevation-1"
        >
            <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.count }}</td>
            </template>
        </v-data-table>
        <div id="return"
             class="text-xs-center">
            <v-btn
                    round
                    color="cyan"
                    dark
                    to="/">Go back to store</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data () {
            return {
                headers: [
                    {
                        text: 'Product name',
                        align: 'left',
                        value: 'name'
                    },
                    { text: 'Product ID', value: 'id' },
                    { text: 'Quantity in cart', value: 'count' }
                ]
            }
        },
        computed: {
            cart(){
                return Object.entries(this.$store.state.cart).map(e=>e[1])
            }
        }
    }
</script>

<style scoped>
    #return{
        margin: 30px;
    }
</style>