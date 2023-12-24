import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import CreateProject from './components/CreateProject.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
    // Routes will be added here
    {
        path: '/',
        component: HelloWorld
    },
    {
      path: '/new-project',
      component: CreateProject
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
})

const app = createApp(App)

app.use(router)

app.mount('#app')