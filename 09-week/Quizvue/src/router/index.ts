import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from "../views/HomePage.vue";
import MedicoPage from "../views/MedicoPage.vue";
import EnfermeroPage from "../views/EnfermeroPage.vue";
import RecepcionistaPage from "../views/RecepcionistaPague.vue";
import PacientePage from "../views/PacientePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/medico',
    name: 'Medico',
    component: MedicoPage
  },
  {
    path: '/enfermero',
    name: 'Enfermero',
    component: EnfermeroPage
  },
  {
    path: '/recepcionista',
    name: 'Recepcionista',
    component: RecepcionistaPage
  },
  {
    path: '/paciente',
    name: 'Paciente',
    component: PacientePage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;