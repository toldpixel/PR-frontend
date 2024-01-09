import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import CreateProject from './components/projects/CreateProject';
import AdminDashboard from './components/AdminDashboard';
import ShowProject from './components/projects/ShowProject';
import EditProject from './components/projects/EditProject';

const routes = [
    // Routes will be added here
    {
        path: '/',
        component: AdminDashboard
    },
    {
      path: '/new-project',
      component: CreateProject
    },
    {
      path: '/show-project/:id',
      component: ShowProject
    },
    {
      path: '/edit-project/:id',
      component: EditProject
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
})

const app = createApp(App)

app.use(router)

app.mount('#app')