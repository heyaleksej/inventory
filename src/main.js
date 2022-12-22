import { createApp } from 'vue'
import App from './App.vue'
import store from "@/bll/store";

import '../src/assets/styles/main.scss'

createApp(App).use(store).mount('#app')

store.subscribe((mutation, state) => {
    localStorage.setItem('items', JSON.stringify(state.items))
})