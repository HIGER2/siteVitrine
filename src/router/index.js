import { createRouter, createWebHashHistory } from "vue-router";
import Accueil from '../pages/Accueil.vue'
import Layout from '../Layoute.vue'


const routes =[
    {
        path:'/',component:Layout, name:"Layout",
        children:[
            {
                path:'',component: Accueil
            }
        ]
    }
]


const router= createRouter({
    history:createWebHashHistory(),
    routes
})


export default router
