/* eslint-disable @typescript-eslint/no-floating-promises */
<template>
  <q-page class="row items-center justify-evenly" style="align-items: stretch">
    <div class="row col-md-6 col-12" style="padding: 30px 32px">
      <div class="col-12 row" style="">
        <div class="text-h4">Plougestan</div>
        <div class="q-mx-sm" style="font-size: 2em">-</div>
        <div class="q-pt-sm">17 oct. - 25 oct.</div>
        <div class="q-mx-sm" style="font-size: 2em">-</div>
        <div class="q-pt-sm">1 voyageur</div>
      </div>
      <div class="col-12">9 logements</div>
      <card-logement
        class="col-12 q-my-sm card-logement"
        :id="0"
        @click="voirDetails(0)"
      ></card-logement>
      <card-logement
        class="col-12 q-my-sm card-logement"
        :id="1"
        @click="voirDetails(1)"
      ></card-logement>
      <card-logement
        class="col-12 q-my-sm card-logement"
        :id="2"
        @click="voirDetails(2)"
      ></card-logement
      ><card-logement
        class="col-12 q-my-sm card-logement"
        :id="3"
        @click="voirDetails(3)"
      ></card-logement
      ><card-logement
        class="col-12 q-my-sm card-logement"
        :id="4"
        @click="voirDetails(4)"
      ></card-logement
      ><card-logement
        class="col-12 q-my-sm card-logement"
        :id="5"
        @click="voirDetails(5)"
      ></card-logement
      ><card-logement
        class="col-12 q-my-sm card-logement"
        :id="6"
        @click="voirDetails(6)"
      ></card-logement
      ><card-logement
        class="col-12 q-my-sm card-logement"
        :id="7"
        @click="voirDetails(7)"
      ></card-logement
      ><card-logement
        class="col-12 q-my-sm card-logement"
        :id="8"
        @click="voirDetails(8)"
      ></card-logement>
    </div>
    <div
      class="col-6"
      style="height: 100%; position: sticky; top: 92px"
      v-if="$q.screen.gt.sm"
    >
      <GoogleMap
        api-key="AIzaSyASLkCpxk6Jm7ZpwpgIdj5E6tf-RYDHMWQ"
        style="width: 100%; height: 90vh"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </div>
  </q-page>
</template>

<script lang="ts">
import CardLogement from 'src/components/Logement/CardLogement.vue';
import { defineComponent } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { CardLogement, GoogleMap, Marker },
  name: 'ListeLogement',

  setup() {
    const Router = useRouter();

    const center = { lat: 40.689247, lng: -74.044502 };
    return {
      center,
      async voirDetails(id: number) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        await Router.push(`/detailsLogement/${id}`);
      },
    };
  },
});
</script>
<style scoped>
.card-logement:hover {
  background-color: lightgray;
  cursor: pointer;
}
</style>
