import { createPinia } from "pinia";
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router/router";


createApp(App)
	.use(createPinia())
	.use(router).mount('#app');
