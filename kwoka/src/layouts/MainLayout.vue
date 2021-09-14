<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white">
        <q-toolbar-title>
          <q-img
            src="../assets/logo_kwoka.png"
            class="q-ma-md"
            @click="allerVers('/')"
            style="width=100%; height: auto; max-width: 200px; min-height: 35px"
          />
        </q-toolbar-title>
        <q-tabs v-model="tab" class="text-green">
          <q-tab name="accueil" label="Accueil" @click="allerVers('/')" />
          <q-tab
            name="listeActivite"
            label="Activités"
            @click="allerVers('listeActivite')"
          />
          <q-tab
            name="listeLogement"
            label="Logements"
            @click="allerVers('listeLogement')"
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
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const $router = useRouter();
    return {
      allerVers(route: string) {
        void $router.push(route);
      },

      tab: ref('accueil'),
    };
  },
});
</script>
