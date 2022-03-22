<template>
    <q-page class="row">
        <div class="row q-mb-xl col-12 image-fond" style="height: calc(85vh - 92px); position: relative">
            <img src="../assets/vector1.png" class="" style="position: absolute; right: 0; top: 10%; width: 30%" />
            <div class="col-4 offset-2" style="
                      display: flex;
                      justify-content: center;
                      align-content: center;
                      flex-direction: column;
                    ">
                <div class="text-h3 text-white">
                    <div class="text-h3 text-white">Redécouvrez</div>
                    <div class="row text-h3 text-white">
                        la
                        <div class="text-green q-ml-sm">Bretagne...</div>
                    </div>
                </div>
                <div class="row text-h5 text-white q-pt-md">
                    <div class="">
                        Avec Kwoka arborez la région de manière éco-responsable !
                    </div>
                </div>
            </div>
            <filtres-recherche class="col-8 offset-2" style="position: absolute; bottom: -50px"></filtres-recherche>
        </div>
        <div style="margin: 0 125px">
            <div class="row col-12 q-mt-xl">
                <div class="text-h2 col-8 text-bold text-left text-green">
                    Logements
                </div>
                <div class="text-bold text-right col q-mt-md" style="cursor: pointer;" @click="versLogement()">Voir plus ></div>
                <div class="row col-12 q-mt-md" style="">
                    <card-logement-accueil class="col-md-3 col-4 q-pr-md"></card-logement-accueil>
                    <card-logement-accueil class="col-md-3 col-4 q-pr-md"></card-logement-accueil>
                    <card-logement-accueil class="col-md-3 col-4 q-pr-md"></card-logement-accueil>
                    <card-logement-accueil v-if="$q.screen.gt.sm" class="col-3 q-pr-md"></card-logement-accueil>
                </div>
            </div>
            <div class="row col-12 q-mt-xl">
                <div class="text-h2 col-8 text-bold text-left text-green">
                    Activités
                </div>
                <div class="text-bold text-right col q-mt-md" style="cursor: pointer;" @click="versActivite()">Voir plus ></div>
                <div class="row col-12 q-mt-md" style="">
                    <card-activite-accueil class="col-4 q-pr-md"></card-activite-accueil>
                    <card-activite-accueil class="col-4 q-pr-md"></card-activite-accueil>
                    <card-activite-accueil class="col-4 q-pr-md"></card-activite-accueil>
                </div>
            </div>
            <div class="row col-12" style="margin-top: 100px">
                <div class="col-md-5 col-12">
                    <div class="text-bold" style="font-size: 52px">
                        <div class="text-primaire">Lorem ipsum</div>
                        <div class="text-primaire">dolor sit amet,</div>
                        <div class="text-secondaire">consectetur adipiscing elit.</div>
                    </div>
                    <div class="q-pt-md" style="font-size: 16px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl, aenean morbi nisl est. Sem ornare cras vitae purus. Purus vivamus eleifend imperdiet tristique lectus curabitur nunc quis justo. Blandit ut aliquam dignissim quam non ac aliquet proin.
                    </div>
                    <div class="row q-pt-xl">
                        <q-btn class="bg-primaire text-white col" label="Proposer un logement" style="font-size: 16px" @click="deposerAnnonce()" />
                        <q-btn class="bg-secondaire text-white q-ml-lg col" label="Proposer une activité" style="font-size: 16px" />
                    </div>
                </div>
                <div class="offset-md-1 col-md-6 col-12">
                    <img src="../assets/Kayak.png" class="q-pr-md" style="width: 100%" />
                </div>
            </div>
            <div class="row bg-primaire" style="margin-top: 100px">
                <img src="../assets/nature.png" class="col-5 q-pr-md" />
                <div class="row col-7 q-pa-xl">
                    <div class="col-9 text-white" style="font-size: 32px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div class="col text-right">
                        <img src="../assets/leaf-ecology-circle.png" />
                    </div>
                    <div class="col-9 q-pt-md text-white" style="font-size: 16px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, vel non in luctus consectetur sodales eu nunc. Donec sagittis, phasellus cursus facilisi quis morbi quis eu. Ut turpis bibendum ligula augue quis viverra quam. Fames nisi sed nec sit aliquam
                        viverra at netus in. Ante dictumst dui dignissim amet, molestie sit ac quam leo. Ligula sed consequat ornare semper eget consectetur. A, interdum quam eu diam risus neque cum amet. Lacus, feugiat bibendum facilisi lectus faucibus sit
                        massa et in. Elit leo urna gravida quis in a.
                    </div>
                    <div class="col text-bold text-white text-right" style="align-self: flex-end;cursor: pointer;">
                        voir plus >
                    </div>
                </div>
            </div>
            <div class="col-12 q-mt-xl">
                <div class="text-h2 text-bold text-left text-green">Nos valeurs</div>
                <div class="q-mt-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit ultrices risus sed ut molestie. Vestibulum arcu morbi commodo sit. A, aliquet gravida mattis rhoncus massa. Non mauris ultrices pretium montes, duis. Id ultricies dui sit quam suspendisse
                    erat. Id in massa tristique lorem. At ipsum pharetra sit porta ullamcorper arcu mauris, velit lobortis. Ut pellentesque sit imperdiet dictum vitae. Elementum id neque turpis commodo nulla.
                </div>
                <div class="row" style="margin: 100px 110px 0 110px">
                    <div class="row col-4 q-px-md" style="display: flex; align-items: center; justify-content: center">
                        <img src="../assets/co2-square.png" class="col q-pr-md" style="max-width: 90px" />
                        <div class="text-primaire col-12 q-pt-md" style="font-size: 32px">
                            lorem ipsum
                        </div>
                        <div class="col-12" style="font-size: 16px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div class="row col-4 q-px-md" style="display: flex; align-items: center; justify-content: center">
                        <img src="../assets/co2-square.png" class="col q-pr-md" style="max-width: 90px" />
                        <div class="text-primaire col-12 q-pt-md" style="font-size: 32px">
                            lorem ipsum
                        </div>
                        <div class="col-12" style="font-size: 16px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div class="row col-4 q-px-md" style="display: flex; align-items: center; justify-content: center">
                        <img src="../assets/co2-square.png" class="col q-pr-md" style="max-width: 90px" />
                        <div class="text-primaire col-12 q-pt-md" style="font-size: 32px">
                            lorem ipsum
                        </div>
                        <div class="col-12" style="font-size: 16px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div>
                <div class="row" style="margin: 100px 110px 100px 110px">
                    <div class="row col-4 q-px-md" style="display: flex; align-items: center; justify-content: center">
                        <img src="../assets/co2-square.png" class="col q-pr-md" style="max-width: 90px" />
                        <div class="text-primaire col-12 q-pt-md" style="font-size: 32px">
                            lorem ipsum
                        </div>
                        <div class="col-12" style="font-size: 16px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div class="row col-4 q-px-md" style="display: flex; align-items: center; justify-content: center">
                        <img src="../assets/co2-square.png" class="col q-pr-md" style="max-width: 90px" />
                        <div class="text-primaire col-12 q-pt-md" style="font-size: 32px">
                            lorem ipsum
                        </div>
                        <div class="col-12" style="font-size: 16px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div class="row col-4 q-px-md" style="display: flex; align-items: center; justify-content: center">
                        <img src="../assets/co2-square.png" class="col q-pr-md" style="max-width: 90px" />
                        <div class="text-primaire col-12 q-pt-md" style="font-size: 32px">
                            lorem ipsum
                        </div>
                        <div class="col-12" style="font-size: 16px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts">
import FiltresRecherche from 'src/components/Accueil/FiltresRecherche.vue';
import CardLogementAccueil from 'src/components/Accueil/CardLogementAccueil.vue';
import CardActiviteAccueil from 'src/components/Accueil/CardActiviteAccueil.vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Accueil',
    components: { FiltresRecherche, CardLogementAccueil, CardActiviteAccueil },
    setup() {
        const Router = useRouter();

        const center = { lat: 40.689247, lng: -74.044502 };
        return {
            Router,
            center,
            voirDetails() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                Router.push('/detailsLogement');
            },
        };
    },
    methods: {
        deposerAnnonce() {
            this.Router.push('deposerAnnonce');
        },
        versLogement() {
            this.Router.push('listeLogement');
        },
        versActivite() {
            this.Router.push('listeActivite');
        }
    }
});
</script>

<style scoped>
.image-fond {
    background-image: url('../assets/hero.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
