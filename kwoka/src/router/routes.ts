import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/accueil', component: () => import('src/pages/Accueil.vue') },
    { path: 'listeActivite', component: () => import('src/pages/ListeActivite.vue') },
    { path: 'listeLogement', component: () => import('src/pages/ListeLogement.vue') }
  ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
