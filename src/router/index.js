import { createRouter, createWebHistory } from 'vue-router'
import TaskTodo from '../components/TaskTodo.vue';

const routes = [
  {
    path: '/',
    name: 'todos',
    component: TaskTodo,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
