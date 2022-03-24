<template>
  <div class="row" style="">
    <img
      :src="image"
      class="col"
      style="height: 210px; border-radius: 5px"
    />
    <div class="col-8 q-pa-md text-black">
      <div
        class="bg-tiny-house text-white text-center label"
        :style="{ 'background': couleur}"
      >
        {{label}}
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
        <div class="col text-right" style="font-size: 12px">Dès <span class="text-green text-bold" style="font-size: 16px">{{prix}}€</span></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardActivite',
  props: {
    id: Number,
  },
  setup(props){
    const listeActivite = [
      {id: 0, Label: 'Plein Air', Titre: 'Accrobranche', Prix: '40', Couleur:'#EB5757', Image:'activite1.png'},
      {id: 1, Label: 'Musée', Titre: 'Écomusée de la Ferme d’Antan', Prix: '40', Couleur:'#F2C94C', Image:'activite2.png'},
      {id: 2, Label: 'Plein Air', Titre: 'Rando-goûter', Prix: '40', Couleur:'#EB5757', Image:'activite3.png'},
      {id: 3, Label: 'Nautisme', Titre: 'Aviron', Prix: '40', Couleur:'#27AE60', Image:'activite4.png'},
      {id: 4, Label: 'Cours', Titre: 'Atelier compost', Prix: '40', Couleur:'#2F80ED', Image:'activite5.png'},
      {id: 5, Label: 'Plein Air', Titre: 'À la découverte du biotope local', Prix: '40', Couleur:'#EB5757', Image:'activite6.png'},
      {id: 6, Label: 'Plein Air', Titre: 'Accrobranche', Prix: '40', Couleur:'#EB5757', Image:'activite1.png'},
      {id: 7, Label: 'Musée', Titre: 'Écomusée de la Ferme d’Antan', Prix: '40', Couleur:'#9B51E0', Image:'activite2.png'},
      {id: 8, Label: 'Plein Air', Titre: 'Rando-goûter', Prix: '40', Couleur:'#EB5757', Image:'activite3.png'},
      {id: 9, Label: 'Nautisme', Titre: 'Aviron', Prix: '40', Couleur:'#2F80ED', Image:'activite4.png'},
    ];
    
    let label = null;
    let titre = null;
    let prix = null;
    let couleur = 'blue';
    let image = '~assets/exemple-logement2.png';
    let logement = listeActivite.find(x => x.id == props.id);
    if(logement){
      titre = logement.Titre;
      label = logement.Label;
      prix = logement.Prix;
      couleur = logement.Couleur;
      image = logement.Image;
    }

    return{
      listeActivite,
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