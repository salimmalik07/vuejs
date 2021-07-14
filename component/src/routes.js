import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import About from './components/About.vue'
import Profile from './components/Profile.vue'
import HelloWorld from './components/HelloWorld.vue'
import Notfound from './components/Notfound.vue'



const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'profile',
        path: '/profile/:name/',
        component: Profile
    },
    {
        name: 'helloworld',
        path: '/helloworld',
        component: HelloWorld
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: Notfound
    }
];

const Router = createRouter({
    history: createWebHistory(),
    routes
})
export default Router