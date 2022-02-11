/* eslint-disable @typescript-eslint/no-floating-promises */
<template>
    <q-page class="row">
        <div class="col-12 text-center q-mt-lg" style="min-height:600px">
            <q-drawer v-model="drawer" show-if-above :width="300" class="shadow-2">
                <div class="text-bold q-pa-lg" style="font-size:32px">Paramètres</div>
                <q-list padding class="menu-list">
                    <q-item clickable v-ripple @click="tab = 'compte'" :active="tab == 'compte'" active-class="text-white bg-green">
                        <q-item-section avatar>
                            <q-icon name="settings" />
                        </q-item-section>
    
                        <q-item-section style="font-size:20px">
                            Compte
                        </q-item-section>
                    </q-item>
    
                    <q-item clickable v-ripple @click="tab = 'securite'" :active="tab == 'securite'" active-class="text-white bg-green">
                        <q-item-section avatar>
                            <q-icon name="key" />
                        </q-item-section>
    
                        <q-item-section style="font-size:20px">
                            Sécurité
                        </q-item-section>
                    </q-item>
    
                    <q-item clickable v-ripple @click="tab = 'facturation'" :active="tab == 'facturation'" active-class="text-white bg-green">
                        <q-item-section avatar>
                            <q-icon name="credit_card" />
                        </q-item-section>
    
                        <q-item-section style="font-size:20px">
                            Facturation
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-drawer>
            <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
                <q-tab-panel name="compte">
                    <div class="row">
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Nom et prénom
                                </div>
                                <div class="q-pt-sm">
                                    Frédéric Mercure
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                        </div>
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Sexe
                                </div>
                                <div class="q-pt-sm">
                                    Homme
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                        </div>
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Date de naissance
                                </div>
                                <div class="q-pt-sm">
                                    22/06/1981
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                        </div>
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Adresse email
                                </div>
                                <div class="q-pt-sm">
                                    f.mercure@aol.com
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                        </div>
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Numéro de téléphone
                                </div>
                                <div class="q-pt-sm">
                                    +33 7 08 43 23 77
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                        </div>
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Adresse postale principale
                                </div>
                                <div class="q-pt-sm">
                                    20 rue de Brest, apt A18, 35000 Rennes
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                        </div>
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Carte d'identité
                                </div>
                                <div class="row text-center items-center q-pt-sm">
                                    Vérifiée
                                    <q-icon class="q-pl-md" name="done" color="green" />
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                        </div>
                    </div>
                </q-tab-panel>
    
                <q-tab-panel name="securite">
                    <div class="row">
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Mot de passe
                                </div>
                                <div class="q-pt-sm">
                                    **********
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                            <div class="col-8 text-left text-bold" style="color:#00AA33; margin-top:100px">
                                Désactiver mon compte
                            </div>
                        </div>
                    </div>
                </q-tab-panel>
    
                <q-tab-panel name="facturation">
                    <div class="row">
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Moyen de paiement favori
                                </div>
                                <div class="row items-center q-pt-sm">
                                    <div class="">
                                        <img src="../assets/mastercard.png" />
                                    </div>
                                    <div class="q-pl-md q-pt-sm">
                                        <div class="">
                                            **** 4555
                                        </div>
                                        <div class="">
                                            Expire le 06/23
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                        </div>
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Coordonnées bancaires
                                </div>
                                <div class="q-pt-sm">
                                    <div class="">
                                        IBAN : FRXX-****
                                    </div>
                                    <div class="">
                                        BIC : CPTFR****
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                        </div>
                        <div class="row col-8 offset-2 q-py-lg">
                            <div class="col-8 text-left">
                                <div class="text-bold">
                                    Adresse de facturation
                                </div>
                                <div class="q-pt-sm">
                                    <div class="">
                                        Frédéric Mercure
                                    </div>
                                    <div class="">
                                        20 rue de Brest
                                    </div>
                                    <div class="">
                                        Appartement A18
                                    </div>
                                    <div class="">
                                        35000 Rennes
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 text-left text-bold" style="color:#00AA33">
                                Modifier
                            </div>
                        </div>
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: {},
    name: 'ParametreCompte',

    setup() {
        return {
            drawer: ref(false),
            tab: ref('compte'),
            splitterModel: ref(20)
        };
    },
});
</script>

<style scoped>

</style>
