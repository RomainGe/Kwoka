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
                <div class="text-h3 text-white text-bold">
                    <div class="text-h3 text-white text-bold">Redécouvrez</div>
                    <div class="row text-h3 text-white text-bold">
                        la
                        <div class="text-green q-ml-sm text-bold">Bretagne...</div>
                    </div>
                </div>
                <div class="row text-h5 text-white q-pt-md">
                    <div class="text-bold">
                        Avec Kwoka arborez la région de manière éco-responsable !
                    </div>
                </div>
            </div>
            <FiltresRecherche class="col-8 offset-2" style="position: absolute; bottom: -50px"></FiltresRecherche>
        </div>
        <div style="margin: 0 125px">
            <div class="row col-12 q-mt-xl">
                <div class="text-h2 col-8 text-bold text-left text-green raleway">
                    Logements
                </div>
                <div class="text-bold text-right col q-mt-md" style="cursor: pointer;" @click="versLogement()">Voir plus ></div>
                <div class="row col-12 q-mt-md" style="">
                    <div class="col-md-3 col-4 q-pr-md zoom" @click="versDetailLogement(2)">
                        <img src="../assets/Logement1.png" style="width: 100%; height: auto" />
                        <div class="text-h6">Lorem ipsum dolor sit amet.</div>
                        <div>Lorem ipsum</div>
                    </div>
                    <div class="col-md-3 col-4 q-pr-md zoom" @click="versDetailLogement(0)">
                        <img src="../assets/Logement2.png" style="width: 100%; height: auto" />
                        <div class="text-h6">Lorem ipsum dolor sit amet.</div>
                        <div>Lorem ipsum</div>
                    </div>
                    <div class="col-md-3 col-4 q-pr-md zoom" @click="versDetailLogement(3)">
                        <img src="../assets/Logement3.png" style="width: 100%; height: auto" />
                        <div class="text-h6">Lorem ipsum dolor sit amet.</div>
                        <div>Lorem ipsum</div>
                    </div>
                    <div v-if="$q.screen.gt.sm" class="col-3 q-pr-md zoom" @click="versDetailLogement(1)">
                        <img src="../assets/Logement4.png" style="width: 100%; height: auto" />
                        <div class="text-h6">Lorem ipsum dolor sit amet.</div>
                        <div>Lorem ipsum</div>
                    </div>
                </div>
            </div>
            <div class="row col-12 q-mt-xl">
                <div class="text-h2 col-8 text-bold text-left text-green raleway">
                    Activités
                </div>
                <div class="text-bold text-right col q-mt-md " style="cursor: pointer;" @click="versActivite()">Voir plus ></div>
                <div class="row col-12 q-mt-md" style="">
                    <div class="col-4 q-pr-md text-white zoom" style="position: relative" @click="versDetailActivite(0)">
                        <img src="../assets/Activite1.png" style="width: 100%; height: auto" />
                        <div class="" style="position: absolute; bottom: 29px; left: 30px; font-size: 2vw">
                            Découverte
                        </div>
                    </div>
                    <div class="col-4 q-pr-md text-white zoom" style="position: relative" @click="versDetailActivite(1)">
                        <img src="../assets/Activite2.png" style="width: 100%; height: auto" />
                        <div class="" style="position: absolute; bottom: 29px; left: 30px; font-size: 2vw">
                            Découverte
                        </div>
                    </div>
                    <div class="col-4 q-pr-md text-white zoom" style="position: relative" @click="versDetailActivite(2)">
                        <img src="../assets/Activite3.png" style="width: 100%; height: auto" />
                        <div class="" style="position: absolute; bottom: 29px; left: 30px; font-size: 2vw">
                            Découverte
                        </div>
                    </div>
                </div>
            </div>
            <div class="row col-12" style="margin-top: 100px">
                <div class="col-md-5 col-12">
                    <div class="text-bold" style="font-size: 52px">
                        <div class="text-primaire raleway">Un logement</div>
                        <div class="text-primaire raleway">disponible ?</div>
                        <div class="text-secondaire raleway">N'hésitez plus !</div>
                    </div>
                    <div class="q-pt-md" style="font-size: 16px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl, aenean morbi nisl est. Sem ornare cras vitae purus. Purus vivamus eleifend imperdiet tristique lectus curabitur nunc quis justo. Blandit ut aliquam dignissim quam non ac aliquet proin.
                    </div>
                    <div class="row q-pt-xl">
                        <q-btn class="bg-primaire text-white col" label="Proposer un logement" style="font-size: 16px" @click="deposerAnnonce()" />
                        <q-btn class="bg-secondaire text-white q-ml-lg col" label="Proposer une activité" style="font-size: 16px" @click="deposerAnnonce()"/>
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
                        Une démarche portée sur l'environnement
                    </div>
                    <div class="col text-right">
                        <img src="../assets/leaf-ecology-circle.png" />
                    </div>
                    <div class="col-9 q-pt-md text-white raleway" style="font-size: 16px">
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
                        <img src="../assets/earth-home-world-warming.svg" class="col q-pr-md" style="max-width: 90px" />
                        <div class="text-primaire col-12 q-pt-md" style="font-size: 32px">
                            lorem ipsum
                        </div>
                        <div class="col-12" style="font-size: 16px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div class="row col-4 q-px-md" style="display: flex; align-items: center; justify-content: center">
                        <img src="../assets/apple.svg" class="col q-pr-md" style="max-width: 90px" />
                        <div class="text-primaire col-12 q-pt-md" style="font-size: 32px">
                            lorem ipsum
                        </div>
                        <div class="col-12" style="font-size: 16px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div class="row col-4 q-px-md" style="display: flex; align-items: center; justify-content: center">
                        <img src="../assets/Heart.svg" class="col q-pr-md" style="max-width: 90px" />
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
                        <img src="../assets/leaf-home-ecology.svg" class="col q-pr-md" style="max-width: 90px" />
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
                        <img src="../assets/Yang.svg" class="col q-pr-md" style="max-width: 90px" />
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
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Accueil',
    components: { FiltresRecherche },
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
        async deposerAnnonce() {
            await this.Router.push('deposerAnnonce');
        },
        async versLogement() {
            await this.Router.push('listeLogement');
        },
        async versActivite() {
            await this.Router.push('listeActivite');
        },
        async versDetailLogement(id: number) {
            await this.Router.push(`/detailsLogement/${id}`);
        },
        async versDetailActivite(id: number) {
            await this.Router.push(`/detailsActivite/${id}`);
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
.zoom {
  transition: transform .2s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
