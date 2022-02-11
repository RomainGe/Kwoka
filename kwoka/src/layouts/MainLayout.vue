<template>
    <q-layout view="hHh Lpr fff">
        <q-header class="shadow-2">
            <q-toolbar class="row bg-white" style="height: 80px">
                <q-toolbar-title class="col-4 q-pa-md">
                    <router-link name="accueil" :to="'/'" label="Accueil">
                        <q-img v-if="$q.screen.gt.xs" src="../assets/logo_kwoka.png" :to="'/accueil'" style="width=100%; height: auto; max-width: 200px; min-width:125px; min-height: 35px; cursor: pointer" />
                        <q-img v-else src="../assets/sigle_kwoka.png" :to="'/accueil'" style="width=100%; height: auto; max-width: 59px; min-width:40px ; min-height: 35px; cursor: pointer" />
                    </router-link>
                </q-toolbar-title>
                <q-tabs dense v-model="tab" class="tab col-4 text-green" indicator-color="transparent">
                    <q-route-tab class="tab" name="listeActivite" :to="'/listeActivite'" active-class="active-tab" label="Activités" style="margin: 0 20px; padding: 0" />
                    <q-route-tab class="tab" name="listeLogement" :to="'/listeLogement'" active-class="active-tab" label="Logements" style="margin: 0 20px; padding: 0" />
                    <q-route-tab class="tab" name="nousDecouvrir" :to="'/blog'" active-class="active-tab" label="Nous Découvrir" style="margin: 0 20px; padding: 0" />
                </q-tabs>
                <!-- <div v-if="connecte == false" class="col text-right">
                                          <q-btn flat color="green" label="Connexion" @click="login()"/>
                                          <q-btn color="green" label="Inscription" />
                                        </div> -->
                <div class="col text-right">
                    <q-avatar @click="versMonCompte()">
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                    </q-avatar>
                    <q-icon class="q-px-md" color="black" name="settings" size="38px" @click="versParametre()" />
                </div>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
        <q-footer class="bg-primaire" style="padding: 60px" v-show="!masqueFooter">
            <div class="row" style="min-height: 250px">
                <div class="col-3" style="padding: 0 20px">
                    <img src="~assets/logo.png" style="width: 100%; height: auto; max-width: 210px" />
                    <div class="" style="margin-top: 35px; font-weight: 300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur blandit odio sollicitudin risus tortor adipiscing.
                    </div>
                    <div class="" style="">Suivez Kwoka !</div>
                </div>
                <div class="col-3" style="padding: 0 20px">
                    <div class="font-bold" style="font-size: 24px">Nos missions</div>
                    <div class="q-py-xs" style="font-weight: 300; margin-top: 35px">
                        Pourquoi Kwoka ?
                    </div>
                    <div class="q-py-xs" style="font-weight: 300">Missions & valeurs</div>
                    <div class="q-py-xs" style="font-weight: 300">Qui sommes nous ?</div>
                    <div class="q-py-xs" style="font-weight: 300">Blabla</div>
                </div>
                <div class="col-3" style="padding: 0 20px">
                    <div class="font-bold" style="font-size: 24px">Nous contacter</div>
                    <div class="q-py-xs" style="font-weight: 300; margin-top: 35px">
                        Nous rejoindre
                    </div>
                    <div class="q-py-xs" style="font-weight: 300">Blog</div>
                    <div class="q-py-xs" style="font-weight: 300">hello@kwoka.fr</div>
                    <div class="q-py-xs" style="font-weight: 300">01 35 22 29 56</div>
                </div>
                <div class="col-3" style="padding: 0 20px">
                    <div class="font-bold" style="font-size: 24px">Nos services</div>
                    <div class="q-py-xs" style="margin-top: 35px; font-weight: 300">
                        Logements
                    </div>
                    <div class="q-py-xs" style="font-weight: 300">Activités</div>
                </div>
                <img src="~assets/montainwhite.png" style="position: absolute; bottom: 0px; right: 20%" />
            </div>
        </q-footer>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
    name: 'MainLayout',

    components: {},

    setup() {
        return {
            tab: ref('accueil'),
            connecte: false,
        };
    },
    methods: {
        login() {
            console.log(this.connecte)
            this.connecte = true;
        },
        versMonCompte() {
            this.$router.push('profil');
        },
        versParametre() {
            this.$router.push('parametreCompte')
        }
    },
    computed: {
        masqueFooter() {
            if (this.$router.currentRoute.value.path == "/messagerie") {
                return true;
            } else {
                return false;
            }
        }
    }
});
</script>

<style scoped>
.tab:hover {
    background-color: white !important;
}

.active-tab {
    position: relative;
}

.active-tab::before {
    content: '';
    display: block;
    position: absolute;
    width: 50%;
    left: 0;
    bottom: 0;
    border-bottom: 3px solid #00aa33;
}
</style>
