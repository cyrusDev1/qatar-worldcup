import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Tabs, Tab} from 'vue3-tabs-component';

const app = createApp(App)

app.use(router)

app.component('tabs', Tabs)
   .component('tab', Tab)
   .mount('#app')
