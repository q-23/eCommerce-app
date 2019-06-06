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
        //Handle initial item fetching from API
        methods: {
            fetchItems(limit = 10) {
                this.$store.dispatch('loadData', {query: this.search, page: this.page, limit: limit});
            }
        },
        created(){
            this.fetchItems()
        }
    }
</script>

<style scoped>
    #pagination{
        margin: 30px;
    }
</style>