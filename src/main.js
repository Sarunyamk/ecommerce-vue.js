import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

// install swal2 npm install vue-toastification@next


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(Toast);

app.mount('#app')
