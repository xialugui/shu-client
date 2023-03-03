import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
// @ts-ignore
import routes from '~pages';

const router = createRouter({
    routes,
    history: createWebHistory()
})
const app = createApp(App)

app.use(router)
app.mount('#app');
app.config.errorHandler = (error) => {

}
