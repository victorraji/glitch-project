
import Vue from "vue";
import  Home from "../components/Home";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    }
]
const router = new VueRouter({
    mode: "history",
    routes
});
export default router;

