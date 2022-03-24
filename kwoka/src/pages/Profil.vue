/* eslint-disable @typescript-eslint/no-floating-promises */
<template>
    <q-page class="row">
        <div class="col-12 text-center q-mt-lg">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" style="border-radius: 50%; width:126px;height:126px">
            <div class="col-12 text-center q-mt-lg" style="font-size:32px">
                Frédéric Mercure
            </div>
            <div class="col-12 text-center q-mt-sm" style="font-size:16px">
                Rennes, France
            </div>
            <div class="col-12 text-center q-mt-sm" style="font-size:12px; color:#C4C4C4">
                Membre depuis Août 2022
            </div>
        </div>
        <div class="col-6 offset-3" style="margin-bottom:100px">
            <div style="font-size:32px; margin-top: 50px">
                Logements et activités proposés
            </div>
            <div class="q-pa-xl row">
                <card-activite class="col-12 zoom" :id="1" @click="versDetailLogement(1)"></card-activite>
                <card-activite class="col-12 zoom" :id="2" @click="versDetailLogement(2)"></card-activite>
                <card-activite class="col-12 zoom" :id="3" @click="versDetailLogement(3)"></card-activite>
            </div>
            <div style="font-size:32px; margin-top:80px">
                Avis laissés (3)
            </div>
            <div class="row">
                <div class="row q-pa-md shadow-3 q-mt-lg" style="width: 60vw">
                    <img src="~assets/commentaire.png" class="" style="height: 75px; width: 75px" />
                    <div class="col row q-ml-md">
                        <div class="col-6 text-bold">Romain B.</div>
                        <div class="col-8 q-py-sm">
                            <q-rating v-model="note" size="2em" :max="5" color="green" />
                        </div>
                        <div class="col-10">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia lorem justo”
                        </div>
                    </div>
                </div>
                <div class="row q-pa-md shadow-3 q-mt-lg" style="width: 60vw">
                    <img src="~assets/commentaire.png" class="" style="height: 75px; width: 75px" />
                    <div class="col row q-ml-md">
                        <div class="col-6 text-bold">Romain B.</div>
                        <div class="col-8 q-py-sm">
                            <q-rating v-model="note" size="2em" :max="5" color="green" />
                        </div>
                        <div class="col-10">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia lorem justo”
                        </div>
                    </div>
                </div>
                <div class="row q-pa-md shadow-3 q-mt-lg" style="width: 60vw">
                    <img src="~assets/commentaire.png" class="" style="height: 75px; width: 75px" />
                    <div class="col row q-ml-md">
                        <div class="col-6 text-bold">Romain B.</div>
                        <div class="col-8 q-py-sm">
                            <q-rating v-model="note" size="2em" :max="5" color="green" />
                        </div>
                        <div class="col-10">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia lorem justo”
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'
import CardActivite from '../components/Activite/CardActivite.vue';

export default defineComponent({
    components: {CardActivite},
    name: 'Profil',

    setup() {
        const Router = useRouter();
        return {
            Router,
            note: 2,
        };
    },
    methods: {
        async versDetailLogement(id:number) {
            await this.Router.push(`detailsLogement/${id}`);
        }
    }
});
</script>

<style scoped>
.zoom {
    transition: transform .2s;
    /* Animation */
    margin: 0 auto;
}

.zoom:hover {
    transform: scale(1.1);
    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
