<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="shadow-2">
      <q-toolbar class="row bg-white">
        <q-toolbar-title class="col-4 q-pa-md">
          <router-link name="accueil" :to="'/accueil'" label="Accueil">
            <q-img
              v-if="$q.screen.gt.xs"
              src="../assets/logo_kwoka.png"
              :to="'/accueil'"
              style="width=100%; height: auto; max-width: 200px; min-width:125px; min-height: 35px; cursor: pointer"
            />
            <q-img
              v-else
              src="../assets/sigle_kwoka.png"
              :to="'/accueil'"
              style="width=100%; height: auto; max-width: 59px; min-width:40px ; min-height: 35px; cursor: pointer"
            />
          </router-link>
        </q-toolbar-title>
        <q-tabs
          narrow-indicator
          dense
          v-model="tab"
          class="tab col-4 text-green"
        >
          <q-route-tab
            class="tab"
            name="listeActivite"
            :to="'/listeActivite'"
            label="Activités"
          />
          <q-route-tab
            class="tab"
            name="listeLogement"
            :to="'/listeLogement'"
            label="Logements"
          />
          <q-route-tab
            class="tab"
            name="nousDecouvrir"
            :to="'/listeLogement'"
            label="Nous Découvrir"
          />
        </q-tabs>
        <div class="col text-right">
          <q-btn flat color="green" label="Connexion" />
          <q-btn color="green" label="Inscription" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    return {
      tab: ref('accueil'),
    };
  },
});
</script>
<style scoped>
.tab:hover {
  background-color: white !important;
}
</style>
