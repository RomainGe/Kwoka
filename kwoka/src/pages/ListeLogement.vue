<template>
  <q-page class="row items-center justify-evenly" style="align-items: stretch">
    <div class="row col-6">
      <h4 class="col-12">Liste Logement</h4>
      <card-logement
        class="col-12 q-my-sm"
        style="height: 300px"
      ></card-logement>
      <card-logement
        class="col-12 q-my-sm"
        style="height: 300px"
      ></card-logement>
      <card-logement
        class="col-12 q-my-sm"
        style="height: 300px"
      ></card-logement>
      <card-logement
        class="col-12 q-my-sm"
        style="height: 300px"
      ></card-logement>
    </div>
    <div class="col-6" style="height: 100%; position: sticky; top: 92px">
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

export default defineComponent({
  components: { CardLogement, GoogleMap, Marker },
  name: 'ListeLogement',
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
});
</script>
