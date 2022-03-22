<template>
  <q-page class="row items-center justify-evenly" style="align-items: stretch">
    <div class="offset-1 col-10 row" style="margin-top: 50px">
      <div class="text-h5" style="font-weight: bold">
        Lorem Ipsum Dolor Sit Amet
        <q-badge color="red" align="middle" style="margin-left: 10px"
          >Tiny House</q-badge>
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
      <div class="row">
        <div class="col-8">
          <div class="text-h6">Dolor Sit Amet</div>
          <div class="q-mb-lg" style="font-weight: lighter">
            <q-icon name="star_border" /> 4,9/5 (666 avis)
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            blandit at ante nec sollicitudin. Curabitur eleifend eros non dolor
            interdum, ac lobortis ante faucibus. Donec fermentum mauris ac
            mauris consectetur, ut commodo diam tristique. Pellentesque eget
            pellentesque mauris.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum in mi ac libero interdum
            volutpat eu ac ante.
          </p>
          <p>
            In condimentum faucibus turpis. Curabitur tristique dictum ipsum, eu
            facilisis nulla eleifend quis. Donec sit amet vehicula mauris.
            Suspendisse tincidunt lobortis pretium. Mauris fringilla quis eros
            ac viverra. Maecenas condimentum augue erat, id eleifend tortor
            luctus tristique.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="text-h6 q-mb-lg">Équipements du logement</div>
        <div class="row col-12">
          <div class="col-2 text-center">
            <q-icon
              class="col-12"
              color="green"
              name="tv"
              style="font-size: 2rem"
            />
            <div class="col-12">Télévision</div>
          </div>
          <div class="col-2 text-center">
            <q-icon
              class="col-12"
              color="green"
              name="wifi"
              style="font-size: 2rem"
            />
            <div class="col-12">Wifi</div>
          </div>
          <div class="col-2 text-center">
            <q-icon
              class="col-12"
              color="green"
              name="local_laundry_service"
              style="font-size: 2rem"
            />
            <div class="col-12">Lave-linge</div>
          </div>
          <div class="col-2 text-center">
            <q-icon
              class="col-12"
              color="green"
              name="restaurant"
              style="font-size: 2rem"
            />
            <div class="col-12">Cuisine</div>
          </div>
          <div class="col-2 text-center">
            <q-icon
              class="col-12"
              color="green"
              name="kitchen"
              style="font-size: 2rem"
            />
            <div class="col-12">Réfrigerateur</div>
          </div>
          <div class="col-2 text-center">
            <q-icon
              class="col-12"
              color="green"
              name="microwave"
              style="font-size: 2rem"
            />
            <div class="col-12">Micro-onde</div>
          </div>
        </div>
      </div>
      <div class="col-12 q-mt-xl">
        <div class="text-h6 q-mb-lg">À propos de votre hôte</div>
        <div class="row">
          <img
            src="~assets/hote.png"
            class=""
            style="height: 160px; width: 160px"
          />
          <div class="col-6 q-px-lg">
            <div class="text-bold" style="font-size: 24px">Fréderic</div>
            <div class="q-py-md">
              Hôte Kwoka de longue date, je vous propose mes divers logements
              éco-responsables et autonomes en énergie. À très bientôt !
            </div>
            <q-btn class="" rounded color="green" label="Contacter cet hôte" @click="messagerie()"/>
          </div>
        </div>
      </div>
      <div class="col-12 q-mt-xl">
        <div class="text-h6 q-mb-lg">Avis sur ce logement</div>
        <div class="row q-pa-md shadow-3" style="width: 60vw">
          <img
            src="~assets/commentaire.png"
            class=""
            style="height: 75px; width: 75px"
          />
          <div class="col row q-ml-md">
            <div class="col-6 text-bold">Romain B.</div>
            <div class="col-8 q-py-sm">
              <q-rating v-model="note" size="2em" :max="5" color="green" />
            </div>
            <div class="col-10">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque lacinia lorem justo”
            </div>
          </div>
        </div>
        <div class="row q-pa-md shadow-3 q-mt-lg" style="width: 60vw">
          <img
            src="~assets/commentaire.png"
            class=""
            style="height: 75px; width: 75px"
          />
          <div class="col row q-ml-md">
            <div class="col-6 text-bold">Romain B.</div>
            <div class="col-8 q-py-sm">
              <q-rating v-model="note" size="2em" :max="5" color="green" />
            </div>
            <div class="col-10">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque lacinia lorem justo”
            </div>
          </div>
        </div>
        <div class="row q-pa-md shadow-3 q-mt-lg" style="width: 60vw">
          <img
            src="~assets/commentaire.png"
            class=""
            style="height: 75px; width: 75px"
          />
          <div class="col row q-ml-md">
            <div class="col-6 text-bold">Romain B.</div>
            <div class="col-8 q-py-sm">
              <q-rating v-model="note" size="2em" :max="5" color="green" />
            </div>
            <div class="col-10">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque lacinia lorem justo”
            </div>
          </div>
        </div>
        <div class="row q-pa-md shadow-3 q-mt-lg" style="width: 60vw">
          <img
            src="~assets/commentaire.png"
            class=""
            style="height: 75px; width: 75px"
          />
          <div class="col row q-ml-md">
            <div class="col-6 text-bold">Romain B.</div>
            <div class="col-8 q-py-sm">
              <q-rating v-model="note" size="2em" :max="5" color="green" />
            </div>
            <div class="col-10">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque lacinia lorem justo”
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
//import CardLogement from 'src/components/Logement/CardLogement.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'PageLogement',
    setup() {
    const Router = useRouter();
        return {
            note: ref(3),
            Router,
        };
    },
    methods: {
        async messagerie() {
            await this.Router.push("messagerie");
        }
    }
};
</script>
