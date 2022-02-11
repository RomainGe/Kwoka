import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    { path: '/', component: () => import('src/pages/Accueil.vue') },
    { path: '/listeActivite', component: () => import('src/pages/ListeActivite.vue') },
    { path: '/blog', component: () => import('src/pages/Blog.vue') },
    { path: '/listeLogement', component: () => import('src/pages/ListeLogement.vue')},
    { path: '/detailsLogement', component: () => import('src/pages/PageLogement.vue')},
<<<<<<< Updated upstream
    { path: '/profil', component: () => import('src/pages/Profil.vue')},
    { path: '/confidentialite', component: () => import('src/pages/Confidentialite.vue')},
    { path: '/deposerAnnonce', component: () => import('src/pages/DeposerAnnonce.vue')},
    { path: '/parametreCompte', component: () => import('src/pages/ParametreCompte.vue')},
    { path: '/messagerie', component: () => import('src/pages/Messagerie.vue')},
=======
    { path: '/demandeReservation', component: () => import('src/pages/DemandeReservation.vue')}
>>>>>>> Stashed changes
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
