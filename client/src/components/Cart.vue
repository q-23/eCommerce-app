<template>
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

</style>