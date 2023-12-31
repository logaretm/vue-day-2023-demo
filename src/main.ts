import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './input.css';
import App from './App.vue';
import FormDemo from '@/pages/FormDemo.vue';
import FilterDemo from '@/pages/FilterDemo.vue';
import CurrencyDemo from '@/pages/CurrencyDemo.vue';

const app = createApp(App);

const routes = [
  {
    component: FormDemo,
    path: '/',
  },
  {
    component: FilterDemo,
    path: '/filters',
  },
  {
    component: CurrencyDemo,
    path: '/currency',
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

app.use(router);

app.mount('#app');
