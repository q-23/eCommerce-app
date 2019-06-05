import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: []
    },
    getters: {

    },
    mutations: {
        updateProducts(state, products) {
            state.products = products
        }
    },
    actions: {
        loadData({
                     commit
                 }) {
            axios.get('/').then((response) => {
                commit('updateProducts', response.data)
                // console.log(state.products)
            })
        }
    }
});