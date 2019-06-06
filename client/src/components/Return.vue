<template>
    <div class="text-xs-center">
        <v-btn
                round
                color="indigo darken-4"
                dark
                @click="this.return"
        >Return from search results</v-btn>
    </div>
</template>

<script>
    export default {
        name: "Return",
        methods: {
            return(){
                this.$store.dispatch('changeComponent', 'Pagination')
            }
        }
    }
</script>

<style scoped>
    div{
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>