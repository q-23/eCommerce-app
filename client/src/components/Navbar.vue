<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
            <span>Staples</span>
            <span class="font-weight-light">eCommerce App</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
                label="Search item"
                v-model="search"
                @keyup.enter="searchItems"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn
                fab
                dark
                color="indigo"
                to="/cart"
        >
            <v-badge
                    color="cyan"
                    left
            >
                <template v-slot:badge>
                    <span>{{total}}</span>
                </template>
                <v-icon dark>shopping_cart</v-icon>
            </v-badge>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        data(){
            return{
                search: ''
            }
        },
        computed: {
            total(){
                return this.$store.state.totalItems
            }
        },
        methods: {
            fetchItems(limit = 140) {
                this.$store.dispatch('loadData', {query: this.search, page: this.page, limit: limit});
            },
            searchItems(){
                this.page = 1;
                this.fetchItems();
                this.search = '';
                this.$store.dispatch('changeComponent', 'Return')
            }
        }
    }
</script>

<style scoped>

</style>