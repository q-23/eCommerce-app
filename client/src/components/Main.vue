<template>
    <div>
        <Product
                v-for="product in products"
                :name="product.general.name"
                :description="product.general.description"
                :brand="product.brand.name"
                :idNr="product.id"
                :key="product.id"
        >
            <v-img
                    :src="product.images.primary.large"
                    aspect-ratio="1.33"
                    @click.stop="dialog = true"
                    slot="image"
            ></v-img>
            <h3 class="headline mb-0" slot="brand">{{product.general.name}}</h3>
            <h4 class=" mb-0" slot="id">ID: {{product.id}}</h4>
        </Product>
    </div>
</template>

<script>
    import Product from './Product'
    export default {
        name: "Main",
        components: {
            Product
        },
        computed:{
            products(){
                return this.$store.state.products
            }
        }
    }
</script>

<style scoped>

</style>