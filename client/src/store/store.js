import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [],
        cart: {},
        totalItems: 0,
        activeComponent: 'Pagination'
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products
        },
        addProductToCart(state, product) {
            state.cart[product.id] = product
        },
        quantityIncrement(state, item) {
            state.cart[item.id].count+= item.count
        },
        addTotal(state, count) {
            state.totalItems+= count
        },
        changeComponent(state, component){
            state.activeComponent = component
        }
    },
    actions: {
        //Handle sending API request with few options - search query, item limit and items' page
        loadData({commit}, payload) {
            axios.get('/', {
                params: {
                    _page: payload.page,
                    q: payload.query,
                    _limit: payload.limit
                }
            }).then((response) => {
                commit('updateProducts', response.data)
            })
        },
        addToCart({commit}, payload) {
            commit('addProductToCart', payload);
            commit('addTotal', payload.count)
        },
        addQuantity({commit}, payload){
            commit('quantityIncrement', payload);
            commit('addTotal', payload.count)
        },
        changeComponent({commit}, payload){
            commit('changeComponent', payload)
        }
    }
});