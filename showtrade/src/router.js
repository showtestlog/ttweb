import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import TTNote from "@/components/TTNote";


Vue.use(VueRouter)

let routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/note',
        name: 'Note',
        component: TTNote
    }
]

export default new VueRouter(
    {
        mode: 'hash',
        routes: routes
    }
)


