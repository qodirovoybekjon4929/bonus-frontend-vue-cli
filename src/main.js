import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import Toaster from "@meforma/vue-toaster";

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).use(Toaster).mount('#app')
