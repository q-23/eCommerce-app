<template>
    <div
            @click="this.fetchItems"
            id="pagination"
            class="text-xs-center">
        <v-pagination
                circle
                color="indigo"
                v-model="page"
                :length="14"
                :total-visible="7"
        ></v-pagination>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                page: 1
            }
        },
        methods: {
            fetchItems(limit = 10) {
                this.$store.dispatch('loadData', {query: this.search, page: this.page, limit: limit});
            },
            searchItems(){
                this.page = 1;
                this.fetchItems();
            }
        },
        created(){
            this.fetchItems()
        }
    }
</script>

<style scoped>
    #pagination{
        margin-top: 30px;
    }
</style>