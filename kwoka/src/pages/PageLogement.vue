<template>
  <q-page class="row items-center justify-evenly" style="align-items: stretch">
    <div class="offset-1 col-10 row" style="margin-top: 50px">
      <div class="text-h5 raleway" style="font-weight: bold">
        {{titre}}
        <q-badge color="red" align="middle" style="margin-left: 10px"
          >{{label}}</q-badge>
      </div>
      <div class="col-12 q-mb-lg">1 chambres - 1 SDB</div>
    </div>
    <div class="col-12 row q-mb-lg" style="height: 400px; padding: 0 10%">
      <div class="col-4">
        <img
          :src="image"
          class="col"
          style="width: 100%; height: 400px"
        />
      </div>
      <div class="col-4">
        <img
          src="~assets/PhotoLogement2.png"
          class="col-12"
          style="width: 100%; height: 400px"
        />
      </div>
      <div class="col-4 row">
        <img
          src="~assets/PhotoLogement1.png"
          class="col-12"
          style="width: 100%; height: 200px"
        />
        <img
          src="~assets/PhotoLogement3.png"
          class="col-12"
          style="width: 100%; height: 200px"
        />
      </div>
    </div>
    <div class="offset-1 col-10 row q-mb-lg">
      <div class="row">
        <div class="col-8">
          <div class="text-h6 raleway text-bold">Dolor Sit Amet</div>
          <div class="q-mb-lg" style="font-weight: lighter">
            <q-icon name="star_border" /> 4,9/5 (566 avis)
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
        <div class="text-h6 q-mb-lg raleway text-bold">Équipements du logement</div>
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
        <div class="text-h6 q-mb-lg raleway text-bold">À propos de votre hôte</div>
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
        <div class="text-h6 q-mb-lg raleway text-bold">Avis sur ce logement</div>
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
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageLogement',
    setup() {
    const Router = useRouter();
    const listeLogement = [
      {id: 0, Label: "Tiny House", Titre: "Tiny House près de la plage", Prix: "55", Couleur:'#EB5757', Image:'exemple_logement2.png'},
      {id: 1, Label: "Woofing", Titre: "Ferme tranquille dans les terres", Prix: "55", Couleur:'#F2C94C', Image:'exemple_logement4.png'},
      {id: 2, Label: "Chambre", Titre: "Super pied à terre à Saint-Malo", Prix: "55", Couleur:'#9B51E0', Image:'exemple_logement1.png'},
      {id: 3, Label: "Cabane", Titre: "Cabane face à la mer", Prix: "55", Couleur:'#27AE60', Image:'exemple_logement3.png'},
      {id: 4, Label: "Insolite", Titre: "Super dôme en pleine nature !", Prix: "55", Couleur:'#2F80ED', Image:'exemple_logement5.png'},
      {id: 5, Label: "Tiny House", Titre: "Tiny House près de la plage", Prix: "55", Couleur:'#EB5757', Image:'exemple_logement1.png'},
      {id: 6, Label: "Woofing", Titre: "Ferme tranquille dans les terres", Prix: "55", Couleur:'#F2C94C', Image:'exemple_logement4.png'},
      {id: 7, Label: "Chambre", Titre: "Super pied à terre à Saint-Malo", Prix: "55", Couleur:'#9B51E0', Image:'exemple_logement1.png'},
      {id: 8, Label: "Cabane", Titre: "Cabane face à la mer", Prix: "55", Couleur:'#27AE60', Image:'exemple_logement3.png'},
      {id: 9, Label: "Insolite", Titre: "Super dôme en pleine nature !", Prix: "55", Couleur:'#2F80ED', Image:'exemple_logement5.png'},
    ];
    
    let label = null;
    let titre = null;
    let prix = null;
    let couleur = 'blue';
    let image = '~assets/exemple-logement2.png';
    let logement = listeLogement.find(x => x.id.toString() == Router.currentRoute.value.params.id);
    if(logement){
      titre = logement.Titre;
      label = logement.Label;
      prix = logement.Prix;
      couleur = logement.Couleur;
      image = logement.Image;
    }

    return {
      listeLogement,
      label,
      prix,
      couleur,
      image,
      titre,
      note: ref(3),
      Router,
      async messagerie() {
        await Router.push('/messagerie');
      }
    };
  },
  methods: {
      
  }
});
</script>
