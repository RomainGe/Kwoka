<template>
  <q-page class="row items-center justify-evenly" style="align-items: stretch">
    <img src="~assets/MacBookPro.png" />
  </q-page>
</template>

<script lang="ts">
import CardLogement from 'src/components/Logement/CardLogement.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { CardLogement },
  name: 'PageLogement',
  setup() {
    return {};
  },
});
</script>
