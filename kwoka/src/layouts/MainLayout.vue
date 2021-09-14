<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white">
        <q-toolbar-title class="q-pa-md">
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
        <q-tabs v-model="tab" class="text-green">
          <q-route-tab
            default
            name="accueil"
            :to="'/accueil'"
            label="Accueil"
          />
          <q-route-tab
            name="listeActivite"
            :to="'/listeActivite'"
            label="Activités"
          />
          <q-route-tab
            name="listeLogement"
            :to="'/listeLogement'"
            label="Logements"
          />
        </q-tabs>
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
