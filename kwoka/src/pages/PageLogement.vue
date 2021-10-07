<template>
  <q-page class="row items-center justify-evenly" style="align-items: stretch">
    <div class="offset-1 col-10 row" style="margin-top: 50px">
      <div class="text-h5" style="font-weight: bold">
        Lorem Ipsum Dolor Sit Amet
        <q-badge color="red" align="middle" style="margin-left: 10px"
          >Tiny House</q-badge
        >
      </div>
      <div class="col-12 q-mb-lg">1 chambres - 1 SDB</div>
    </div>
    <div class="col-12 row q-mb-lg" style="height: 400px; padding: 0 10%">
      <div class="col-4">
        <img
          src="~assets/exemple-logement2.png"
          class="col"
          style="width: 100%; height: 400px"
        />
      </div>
      <div class="col-4">
        <img
          src="~assets/exemple-logement2.png"
          class="col-12"
          style="width: 100%; height: 400px"
        />
      </div>
      <div class="col-4 row">
        <img
          src="~assets/exemple-logement2.png"
          class="col-12"
          style="width: 100%; height: 200px"
        />
        <img
          src="~assets/exemple-logement2.png"
          class="col-12"
          style="width: 100%; height: 200px"
        />
      </div>
    </div>
    <div class="offset-1 col-10 row q-mb-lg">
      <div class="col-8">
        <div class="text-h6">Dolor Sit Amet</div>
        <div class="q-mb-lg" style="font-weight: lighter">
          <q-icon name="star_border" /> 4,9/5 (666 avis)
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit
          at ante nec sollicitudin. Curabitur eleifend eros non dolor interdum,
          ac lobortis ante faucibus. Donec fermentum mauris ac mauris
          consectetur, ut commodo diam tristique. Pellentesque eget pellentesque
          mauris, consectetur semper arcu. Donec ligula mi, mattis eget molestie
          a, commodo condimentum enim. Duis blandit aliquam ligula, eu lobortis
          quam dapibus sit amet. In efficitur, metus nec sodales interdum,
          sapien elit sagittis est, a tincidunt tellus massa at eros.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum in mi ac libero interdum volutpat
          eu ac ante. Pellentesque laoreet sem faucibus lorem rhoncus, vel
          sagittis neque elementum. Maecenas in ultrices tellus. Vestibulum
          placerat ultricies justo in dignissim. Donec consequat ligula orci, at
          faucibus diam sodales cursus. Integer in nulla diam.
        </p>
        <p>
          In condimentum faucibus turpis. Curabitur tristique dictum ipsum, eu
          facilisis nulla eleifend quis. Donec sit amet vehicula mauris.
          Suspendisse tincidunt lobortis pretium. Mauris fringilla quis eros ac
          viverra. Maecenas condimentum augue erat, id eleifend tortor luctus
          tristique. Ut auctor efficitur velit, sit amet placerat justo suscipit
          sed. Proin mollis purus non ex dignissim feugiat. Fusce vulputate
          pretium ipsum, ac feugiat est posuere at. Maecenas euismod dui
          elementum porttitor vulputate. In nec faucibus urna, in semper est.
          Cras ornare euismod vulputate. Proin a dui nisl.
        </p>
        <div class="text-h6 q-mb-lg">Équipements du logement</div>
        <div class="row">
          <div class="col-2 text-center">
            <q-icon class="col-12" color="green" name="tv" style="font-size: 2rem;" />
            <div class="col-12">Télévision</div>
          </div>
          <div class="col-2 text-center">
            <q-icon class="col-12" color="green" name="wifi" style="font-size: 2rem;" />
            <div class="col-12">Wifi</div>
          </div>
          <div class="col-2 text-center">
            <q-icon class="col-12" color="green" name="local_laundry_service" style="font-size: 2rem;" />
            <div class="col-12">Lave-linge</div>
          </div>
          <div class="col-2 text-center">
            <q-icon class="col-12" color="green" name="restaurant" style="font-size: 2rem;" />
            <div class="col-12">Cuisine</div>
          </div>
          <div class="col-2 text-center">
            <q-icon class="col-12" color="green" name="kitchen" style="font-size: 2rem;" />
            <div class="col-12">Réfrigerateur</div>
          </div>
          <div class="col-2 text-center">
            <q-icon class="col-12" color="green" name="microwave" style="font-size: 2rem;" />
            <div class="col-12">Micro-onde</div>
          </div>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </q-page>
</template>

<script lang="ts">
//import CardLogement from 'src/components/Logement/CardLogement.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  //components: { CardLogement },
  name: 'PageLogement',
  setup() {
    return {};
  },
});
</script>
