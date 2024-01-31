import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import { createPinia } from 'pinia'

import App from './App.vue'
import AudioView from './pages/AudioView.vue'
import VideoView from './pages/VideoView.vue'
import HomeView from './pages/HomeView.vue'
import TestView from './pages/TestView.vue'

import './output.css'

// const pinia = createPinia()
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/video', component: VideoView },
        { path: '/audio', component: AudioView },
        { path: '/test', component: TestView },
    ]
});

const app = createApp(App)

app.use(router)
// app.use(pinia)

app.mount('#app')