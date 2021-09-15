<template>
  <q-page class="row">
    <div
      class="row q-mb-xl col-12 image-fond"
      style="height: calc(85vh - 92px); position: relative"
    >
      <div
        class="col-4 offset-2"
        style="
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: column;
        "
      >
        <div class="text-h3 text-white">Lorem Ipsum</div>
        <div class="text-h5 text-white">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </div>
      </div>
      <filtres-recherche
        class="col-8 offset-2"
        style="position: absolute; bottom: -50px"
      ></filtres-recherche>
    </div>
    <div class="row col-12 q-mt-xl">
      <div class="text-h2 col-8 text-bold text-left text-green q-px-md">
        Logements
      </div>
      <div class="text-bold text-right col-3 q-mt-md">Voir plus ></div>
      <div
        class="row col-12 q-mt-md"
        style="display: flex; justify-content: space-between"
      >
        <card-logement-accueil></card-logement-accueil>
        <card-logement-accueil></card-logement-accueil>
        <card-logement-accueil></card-logement-accueil>
        <card-logement-accueil></card-logement-accueil>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import FiltresRecherche from 'src/components/Accueil/FiltresRecherche.vue';
import CardLogementAccueil from 'src/components/Accueil/CardLogementAccueil.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Accueil',
  components: { FiltresRecherche, CardLogementAccueil },
});
</script>
<style scoped>
.image-fond {
  background-image: url('../assets/hero.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
