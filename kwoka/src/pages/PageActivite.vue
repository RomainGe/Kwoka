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
        <div class="text-h6 q-mb-lg raleway text-bold">Avis sur cette activité</div>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageActivite',
    setup() {
    const Router = useRouter();
    const listeActivite = [
      {id: 0, Label: "Plein Air", Titre: "Accrobranche", Prix: "40", Couleur:'#EB5757', Image:'activite1.png'},
      {id: 1, Label: "Musée", Titre: "Écomusée de la Ferme d’Antan", Prix: "40", Couleur:'#F2C94C', Image:'activite2.png'},
      {id: 2, Label: "Plein Air", Titre: "Rando-goûter", Prix: "40", Couleur:'#EB5757', Image:'activite3.png'},
      {id: 3, Label: "Nautisme", Titre: "Aviron", Prix: "40", Couleur:'#27AE60', Image:'activite4.png'},
      {id: 4, Label: "Cours", Titre: "Atelier compost", Prix: "40", Couleur:'#2F80ED', Image:'activite5.png'},
      {id: 5, Label: "Plein Air", Titre: "À la découverte du biotope local", Prix: "40", Couleur:'#EB5757', Image:'activite6.png'},
      {id: 6, Label: "Plein Air", Titre: "Accrobranche", Prix: "40", Couleur:'#EB5757', Image:'activite1.png'},
      {id: 7, Label: "Musée", Titre: "Écomusée de la Ferme d’Antan", Prix: "40", Couleur:'#9B51E0', Image:'activite2.png'},
      {id: 8, Label: "Plein Air", Titre: "Rando-goûter", Prix: "40", Couleur:'#EB5757', Image:'activite3.png'},
      {id: 9, Label: "Nautisme", Titre: "Aviron", Prix: "40", Couleur:'#2F80ED', Image:'activite4.png'},
    ];
    
    let label = null;
    let titre = null;
    let prix = null;
    let couleur = 'blue';
    let image = '~assets/exemple-logement2.png';
    let logement = listeActivite.find(x => x.id.toString() == Router.currentRoute.value.params.id);
    if(logement){
      titre = logement.Titre;
      label = logement.Label;
      prix = logement.Prix;
      couleur = logement.Couleur;
      image = logement.Image;
    }

    return {
      listeActivite,
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
