import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import VueLogger from 'vuejs3-logger';
// @ts-ignore
import routes from '~pages';
import {LogLevels} from "vuejs3-logger/dist/enum/log-levels";

const isProduction = import.meta.env.NODE_ENV === 'production';
const options = {
    isEnabled: true,
    logLevel: isProduction ? LogLevels.ERROR : LogLevels.DEBUG,
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
};

const router = createRouter({
    routes,
    history: createWebHistory()
})
const app = createApp(App)
app.use(VueLogger, options)
app.use(router)
app.mount('#app');
app.config.errorHandler = (error) => {

}
