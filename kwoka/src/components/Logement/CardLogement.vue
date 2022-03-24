<template>
  <div class="row" style="">
    <img
      :src="image"
      class="col"
      style="height: 210px; border-radius: 5px"
    />
    <div class="col-8 q-pa-md text-black">
      <div
        class="text-white text-center label"
        :style="{ 'background': couleur}"
      >
        <span >
        {{label}}
        </span>
      </div>
      <div class="" style="font-size: 24px">{{titre}}</div>
      <div class="" style="font-size: 16px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
        ultrices eget consequat, egestas nunc.
      </div>
      <div class="q-pt-md" style="font-size: 12px">
        Lorem ipsum dolor sit amet
      </div>
      <div class="" style="font-size: 12px">Lorem ipsum dolor</div>
      <div class="row q-py-sm">
        <div class="col" style="font-size: 12px">4 Etoiles</div>
        <div class="col text-right" style="font-size: 12px"><span class="text-green text-bold" style="font-size: 16px">{{prix}}€</span>/nuit</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardLogement',
  props: {
    id: Number,
  },
  setup(props){
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
    let logement = listeLogement.find(x => x.id == props.id);
    if(logement){
      titre = logement.Titre;
      label = logement.Label;
      prix = logement.Prix;
      couleur = logement.Couleur;
      image = logement.Image;
    }

    return{
      listeLogement,
      label,
      prix,
      couleur,
      image,
      titre
    }
  }
});
</script>
<style scoped>
.label{
  width: 83px; 
  height: 22px;
  border-radius: 5px; 
  font-size: 12px;
}
</style>
