/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

Vue.config.productionTip = false;


import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueAxios from "vue-axios";
import axios from "axios";

import App from "./app.vue";

import Toasted from "vue-toasted";

Vue.use(VueAxios, axios);

import ShiftComponent from "./components/ShiftComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import RegisterComponent from "./components/RegisterComponent.vue";
import VerifyComponent from "./components/VerifyComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import SignoutComponent from "./components/SignoutComponent.vue";
import MyTeamComponent from "./components/MyTeamComponent.vue";
import PlaygroundComponent from "./components/PlaygroundComponent.vue";
import PlaygroundListComponent from "./components/PlaygroundListComponent.vue";

const routes = [
    {
        name: "home",
        path: "/",
        component: HomeComponent
    },
    {
        name: "reg",
        path: "/reg",
        component: RegisterComponent
    },
    {
        name: "reg2",
        path: "/reg2",
        component: VerifyComponent
    },
    {
        name: "posts",
        path: "/posts",
        component: IndexComponent
    },
    {
        name: "profile",
        path: "/profile",
        component: ProfileComponent
    },
    {
        name: "signout",
        path: "/signout",
        component: SignoutComponent
    },
    {
        name: "shift",
        path: "/shift",
        component: ShiftComponent
    },
    {
        name: "myteam",
        path: "/myteam",
        component: MyTeamComponent
    },
    {
        name: "newplayground",
        path: "/playgroundnew",
        component: PlaygroundComponent
    },
    {
        name: "playgroundlist",
        path: "/playgroundlist",
        component: PlaygroundListComponent
    }
];

const router = new VueRouter({ mode: "history", routes: routes });
const app = new Vue(Vue.util.extend({ router }, App)).$mount("#app");

import VuePersianDatetimePicker from "vue-persian-datetime-picker";
Vue.component("date-picker", VuePersianDatetimePicker);
Vue.component("image-component", require("./components/ProfileComponent.vue"));

Vue.component("MenuComponent", MenuComponent);
Vue.component("HeaderComponent", HeaderComponent);
