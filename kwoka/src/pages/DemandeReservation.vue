<template>
  <q-page class="row">
    <q-card
      style="
        position: fixed;
        weigth: 300px;
        height: 450px;
        top: 100px;
        right: 0;
        z-index: 1
      "
    >
      <q-card-section class="row">
        <q-img
          class="rounded-borders col-6"
          src="~assets/exemple-logement2.png"
        />
        <div class="col-6">
          <div class="text-weight-bold">Tiny House près de la plage</div>
          <div>Plougoustan, Côtes d’Armor, Bretagne</div>
        </div>
      </q-card-section>
      <q-card-section class="row">
        <div class="col-6 row">
          <div class="text-positive text-center">
            <span class="material-icons">person</span>
          </div>
          3 pers
        </div>
        <div class="col-6 row">
          <div class="text-positive text-center">
            <span class="material-icons">nightlight</span>
          </div>
          4 nuits
        </div>
      </q-card-section>
      <q-card-section class="row">
        <div class="col-8">66 € x 4 nuits</div>
        <div class="col-4">264 €</div>
      </q-card-section>
      <q-card-section class="row">
        <div class="col-8 text-weight-bold">Total</div>
        <div class="col-4 text-weight-bold">264 €</div>
      </q-card-section>
      <q-card-section class="row">
        <div class="text-weight-bold">
          Frais de services équitables inclus
          <span class="material-icons"> help_outline </span>
        </div>
      </q-card-section>
      <div class="text-center q-mb-lg q-mt-lg">
        <q-btn color="positive" label="Réserver" />
      </div>
    </q-card>
    <div
      class="offset-3 col-6"
      style="
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
      "
    >
      <div class="text-h5 text-center">Demande de reservation</div>
      <div class="text-center q-mb-lg">
        Attente de confirmation de votre hôte
      </div>
      <div>
        <div class="text-h6 text-center text-weight-bold">Votre voyage</div>
        <div class="q-mb-md">
          <div class="text-weight-bold">Dates</div>
          <div class="row">
            <div class="col-11">30 Décembre 2021 - 3 Janvier 2022</div>
            <div
              class="col-1 text-positive text-weight-bold"
              style="cursor: pointer"
            >
              Modifier
            </div>
          </div>
        </div>
        <div>
          <div class="text-weight-bold">Voyageurs</div>
          <div class="row">
            <div class="col-11">3 Voyageurs</div>
            <div
              class="col-1 text-positive text-weight-bold"
              style="cursor: pointer"
            >
              Modifier
            </div>
          </div>
        </div>
      </div>
      <div class="text-h6 text-center text-weight-bold">Le prix</div>
      <div>
        <div class="q-mb-md row">
          <div class="text-positive q-mr-sm">
            <span class="material-icons">wash</span>
          </div>
          Ménage :
          <div class="text-positive q-mr-sm q-ml-sm">inclus</div>
          dans le prix
        </div>
      </div>
      <div>
        <div class="q-mb-md row">
          <div class="text-positive q-mr-sm">
            <span class="material-icons">bed</span>
          </div>
          Linge de lit :
          <div class="text-positive q-mr-sm q-ml-sm">inclus</div>
          dans le prix
        </div>
      </div>
      <div>
        <div class="q-mb-md row">
          <div class="text-positive q-mr-sm">
            <span class="material-icons">shower</span>
          </div>
          Linge de toilette :
          <div class="text-positive q-mr-sm q-ml-sm">inclus</div>
          dans le prix
        </div>
      </div>
      <div class="text-h6 text-center text-weight-bold">Paiement</div>
      <div>
        <div>
          <div>Numéro de carte</div>
          <q-input v-model="numero" label="1234 5678 9101 1213" />
        </div>
        <div class="row">
          <div class="col-5 q-mr-lg">
            <div>Date d’expiration</div>
            <q-input v-model="date" label="10/22" />
          </div>
          <div class="col-5">
            <div>Cryptogramme visuel</div>
            <q-input v-model="cryptogramme" label="123" />
          </div>
        </div>
        <div class="row">
          <div class="col-5 q-mr-lg">
            <div>Titulaire de la carte</div>
            <q-input v-model="titulaire" label="John Doe" />
          </div>
          <div class="col-5">
            <div>Code postal</div>
            <q-input v-model="code" label="35000" />
          </div>
        </div>
        <div class="q-mt-md">
          Le débit sera effectué seulement après la validation de l’hôte
        </div>
        <div>
          <q-checkbox
            v-model="check"
            label="Se souvenir de moi pour un prochain paiement"
          />
        </div>
      </div>
      <div class="text-h6 text-center text-weight-bold">Conditions</div>
      <div class="q-mb-md">
        <div class="text-weight-bold">Annulation</div>
        <div>
          <div>
            Remboursement gratuite 7 jours avant l’arrivée, 75% remboursable
            ensuite.
          </div>
        </div>
        <div class="row q-mt-sm">
          <div class="text-positive q-mr-sm">
            <span style="font-size: 25px" class="material-icons">payments</span>
          </div>
          <div>
            Remboursement à 100% jusqu’au 23 Décembre puis remboursement à 75%
            après cette date.
          </div>
        </div>
        <div class="q-mt-md">
          <div class="text-weight-bold">Covid-19</div>
          <div>
            En cas de force majeure lié au Covid-19, GreenGo facilite un accord
            à l'amiable entre voyageurs et hôtes. A défaut d’accord, les
            conditions d’annulation ci-dessus s’appliquent.
          </div>
        </div>
        <div class="q-mt-md">
          <div class="text-weight-bold">Réglement intérieur</div>
          <div class="row q-mt-sm">
            <div class="text-positive q-mr-sm">
              <span style="font-size: 25px" class="material-icons">pets</span>
            </div>
            <div>Animaux acceptés</div>
          </div>
          <div class="row q-mt-sm">
            <div class="text-positive q-mr-sm">
              <span style="font-size: 25px" class="material-icons"
                >local_bar</span
              >
            </div>
            <div>Soirées non autorisées</div>
          </div>
          <div class="row q-mt-sm">
            <div class="text-positive q-mr-sm">
              <span style="font-size: 25px" class="material-icons"
                >smoking_rooms</span
              >
            </div>
            <div>Etablissement fumeur</div>
          </div>
        </div>
        <div class="q-mt-md">
          <div class="text-weight-bold">Horaires</div>
          <div class="q-mb-sm">Arrivée : Entre 12h00 et 19h00</div>
          <div class="q-mb-sm">Départ : Entre 8h00 et 11h00</div>
        </div>
      </div>
      <div class="text-h6 text-center text-weight-bold">Message</div>
      <div>
        <div>
          Vous aurez plus de chances que l’hôte accepte votre réservation si
          vous lui laissez un message
        </div>
        <div class="row items-center q-mt-lg">
          <img src="~assets/hote.png" style="height: 30px" class="q-mr-lg" />
          <div class="text-weight-bold">Frédéric</div>
        </div>
        <div>
          <q-input v-model="message" type="textarea" outlined label="Message" />
        </div>
      </div>
      <div class="text-h6 text-center text-weight-bold">Confirmation</div>
      <div class="row">
        En cliquant sur le bouton ci-dessous, j’accepte
        <div class="text-positive q-ml-sm q-mr-sm">
          les conditions générales de vente
        </div>
        et d’utilisation de Kwoka et j’envoie ma demande pour de très belles
        vacances françaises, équitables et responsables !
      </div>
      <div class="text-center q-mb-lg q-mt-lg">
        <q-btn color="positive" label="Réserver" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Demande reservation',
  setup() {
    return {
      check: false,
    };
  },
});
</script>

