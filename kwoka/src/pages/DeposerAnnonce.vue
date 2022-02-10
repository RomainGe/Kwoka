<template>
    <q-page class="row">
        <div class="col-8 offset-2">
            <div class="q-py-lg" style="font-size: 32px">
                Déposer une annonce
            </div>
            <div>
                <div class="q-py-lg text-bold" style="font-size: 16px">
                    Que souhaitez-vous proposer ?
                </div>
                <div class="row">
                    <q-checkbox v-model="CheckboxLogement" class="col-4" label="Logement" color="light-green" />
                    <q-checkbox v-model="CheckboxActivite" class="col-4" label="Activité" color="light-green" />
                </div>
            </div>
            <div>
                <div class="q-py-lg text-bold" style="font-size: 16px">
                    Quelle catégorie correspond le mieux à votre logement ?
                </div>
                <div class="row">
                    <q-select dense style="width:250px" outlined v-model="selectCategorie" :options="optionSelect" label="Choisissez une catégorie" />
                </div>
            </div>
            <div>
                <div class="q-py-lg text-bold" style="font-size: 16px">
                    Titre de votre annonce :
                </div>
                <div class="row">
                    <q-input dense style="width:400px" v-model="selectCategorie" placeholder="Exemple : Tiny House près de la plage" />
                </div>
            </div>
            <div>
                <div class="q-py-lg text-bold" style="font-size: 16px">
                    Lieu où se trouve votre logement :
                </div>
                <div class="row">
                    <q-input dense style="width:400px" v-model="selectCategorie" placeholder="Exemples : 56000, Vannes" />
                </div>
            </div>
            <div>
                <div class="q-py-lg text-bold" style="font-size: 16px">
                    Dites-en un peu plus à propos de votre logement :
                </div>
                <div class="row">
                    <q-input outlined type="textarea" dense style="width:800px" v-model="selectCategorie" />
                </div>
            </div>
            <div>
                <div class="q-py-lg text-bold" style="font-size: 16px">
                    Quels labels possède votre logement ? (plusieurs choix possibles)
                </div>
                <div class="row">
                    <q-select v-model="selectLabels" multiple :options="optionSelect" style="width: 250px" label="Exemples :" />
                </div>
            </div>
            <div>
                <div class="q-py-lg text-bold" style="font-size: 16px">
                    Ajoutez quelques photos (3 minimum)
                </div>
                <div class="text-center shadow-3" style="background:#F3F3F3;width:195px; height:147px">
                    <q-icon name="add_photo_alternate" size="70px" style="top: 25%;" />
                </div>
            </div>
            <div>
                <div class="q-py-lg text-bold" style="font-size: 16px">
                    Liste des équipements disponibles :
                </div>
                <div class="row">
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Equipement de base (Accessoires de salle de bain et de lit)" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Parking" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Produits de nettoyage" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Espace repas pleine air" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Wifi" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Détecteur de fumée" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Plaques de cuissons" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Kit premier secours" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Cuisine" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Four" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Vaisselle et couverts" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Vélos" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Sèche-linge" color="light-green" />
                    <div class="row col-6 items-center">
                        <q-checkbox v-model="CheckboxLogement" class="" label="Proposer le petit déjeuner" color="light-green" />
                        <div class="text-bold q-pl-md">
                            Prix :
                        </div>
                        <q-input dense label="" type="number" style="width:70px"></q-input>
                        <div class="text-bold">
                            €
                        </div>
                    </div>
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Chauffage" color="light-green" />
                    <q-checkbox v-model="CheckboxLogement" class="col-6" label="Dépôt de bagage autorisé" color="light-green" />
                    <div class="row col-6">
                        <q-checkbox v-model="CheckboxLogement" class="" label="Autres :" color="light-green" />
                        <q-input dense class="q-pl-sm"></q-input>
                    </div>
                </div>
            </div>
            <div style="margin-top:50px">
                <div class="text-center q-py-lg" style="font-size: 16px;">
                    En cliquant sur “déposer votre annonce”, j’accepte les <span class="text-bold" style="color:#00AA33">conditions générales d’utilisation</span> du site kwoka.fr et autorise Kwoka à diffuser mon annonce.
                </div>
            </div>
            <div class="text-center" style="margin-top:50px; margin-bottom:100px">
                <q-btn color="green" label="Déposer une annonce" />
            </div>
    
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    components: {},
    name: 'DeposerAnnonce',

    setup() {
        return {
            CheckboxLogement: true,
            CheckboxActivite: false,
            selectCategorie: null,
            selectLabels: null,
            optionSelect: [
                'aaaaaaaa', 'bbbbbbbb', 'ccccccccc', 'dddddddd', 'eeeeee'
            ],
        };
    },
    data() {
        return {};

    },
});
</script>

<style scoped>

</style>
