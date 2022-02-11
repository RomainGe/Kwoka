<template>
  <q-layout view="hHh Lpr fff">
    <q-header class="shadow-2">
      <q-toolbar class="row bg-white">
        <q-toolbar-title class="col-4 q-pa-md">
          <router-link name="accueil" :to="'/'" label="Accueil">
            <q-img
              v-if="$q.screen.gt.xs"
              src="../assets/logo_kwoka.png"
              :to="'/accueil'"
              style="width=100%; height: auto; max-width: 200px; min-width:125px; min-height: 35px; cursor: pointer"
            />
            <q-img
              v-else
              src="../assets/sigle_kwoka.png"
              :to="'/accueil'"
              style="width=100%; height: auto; max-width: 59px; min-width:40px ; min-height: 35px; cursor: pointer"
            />
          </router-link>
        </q-toolbar-title>
        <q-tabs
          dense
          v-model="tab"
          class="tab col-4 text-green"
          indicator-color="transparent"
        >
          <q-route-tab
            class="tab"
            name="listeActivite"
            :to="'/listeActivite'"
            active-class="active-tab"
            label="Activités"
            style="margin: 0 20px; padding: 0"
          />
          <q-route-tab
            class="tab"
            name="listeLogement"
            :to="'/listeLogement'"
            active-class="active-tab"
            label="Logements"
            style="margin: 0 20px; padding: 0"
          />
          <q-route-tab
            class="tab"
            name="nousDecouvrir"
            :to="'/blog'"
            active-class="active-tab"
            label="Nous Découvrir"
            style="margin: 0 20px; padding: 0"
          />
        </q-tabs>
        <div class="col text-right">
            <q-avatar @click="versMonCompte()">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-icon class="q-px-md" color="black" name="settings" size="38px" @click="versParametre()" />
        </div>
        <div class="col text-right">
          <q-btn
            flat
            color="green"
            label="Connexion"
            @click="connexion = true"
          />
          <q-btn
            @click="inscription = true"
            color="green"
            label="Inscription"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-primaire" style="padding: 60px">
      <div class="row" style="min-height: 250px">
        <div class="col-3" style="padding: 0 20px">
          <img
            src="~assets/logo.png"
            style="width: 100%; height: auto; max-width: 210px"
          />
          <div class="" style="margin-top: 35px; font-weight: 300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur blandit odio sollicitudin risus tortor adipiscing.
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
        <img
          src="~assets/montainwhite.png"
          style="position: absolute; bottom: 0px; right: 20%"
        />
      </div>
    </q-footer>
    <q-dialog v-model="connexion">
      <q-card style="max-width: 500px; width: 300px" class="row">
        <q-card-section class="offset-1 col-10">
          <div class="text-h6 text-center">
            Connectez-vous à votre compte Kwoka
          </div>
        </q-card-section>
        <q-card-section class="offset-1 col-10">
          <div class="text-center row">
            Pas encore inscrit ?
            <div
              @click="
                connexion = false;
                inscription = true;
              "
              style="cursor: pointer"
              class="text-positive q-ml-sm"
            >
              Cliquez ici
            </div>
          </div>
        </q-card-section>

        <q-card-section class="offset-1 col-10">
          <q-input dense v-model="email" label="Adresse Mail" />
          <q-input dense v-model="password" label="Mot de Passe" />
          <q-checkbox v-model="check" label="Se souvenir de moi" />
        </q-card-section>
        <q-btn
          class="offset-1 col-10"
          label="Connexion"
          type="submit"
          color="positive"
        />
        <div class="offset-1 col-10">Mot de passe oublié</div>
      </q-card>
    </q-dialog>

    <q-dialog v-model="inscription">
      <q-card style="max-width: 500px; width: 400px" class="row">
        <q-card-section class="offset-1 col-10">
          <div class="text-h5 text-weight-bold text-center">Rejoignez la communauté Kwoka !</div>
        </q-card-section>
        <q-card-section class="offset-1 col-10">
          <div class="text-center row">
            Déja inscrit ?
            <div
              @click="
                connexion = true;
                inscription = false;
              "
              style="cursor: pointer"
              class="text-positive q-ml-sm"
            >
              C’est par ici
            </div>
          </div>
        </q-card-section>

        <q-card-section class="offset-1 col-10">
          <q-input class="q-mb-sm" dense outlined v-model="nom" label="Nom" />
          <q-input class="q-mb-sm" dense outlined v-model="prenom" label="Prénom" />
          <q-input class="q-mb-sm" dense outlined v-model="birth" label="Date de naissance" />
          <q-input class="q-mb-sm" dense outlined v-model="email" label="Adresse e-mail" />
          <q-input class="q-mb-sm" dense outlined v-model="password" label="Mot de passe" />
        </q-card-section>
        <div class="offset-1 col-10 row">
          En cliquant sur le bouton Continuer ci-dessous, j'accepte les
          <div style="cursor: pointer" class="text-positive q-ml-xs q-mr-xs">
            Conditions générales
          </div>
          , les
          <div style="cursor: pointer" class="text-positive q-ml-xs q-mr-xs">Conditions de service relatives aux paiements</div>
          et la
          <div style="cursor: pointer" class="text-positive q-ml-xs q-mr-xs">Politique de confidentialité</div>
          de Kwoka
        </div>
        <q-btn
          class="offset-1 col-10"
          label="Connexion"
          type="submit"
          color="positive"
        />
      </q-card>
    </q-dialog>
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
            connexion: ref(false),
            inscription: ref(false),
            email: ref(''),
            password: ref(''),
            check: ref(false),
            nom: null,
            prenom: null,
            birth: null,
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
