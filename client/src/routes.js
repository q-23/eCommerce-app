import appMain from "./components/Main.vue";
import Cart from "./components/Cart.vue";


export const routes = [
    {
        path: '',
        components: {
            default: appMain
        }
    },
    {
        path: '/cart',
        components: {
            default: Cart
        }
    }
];
