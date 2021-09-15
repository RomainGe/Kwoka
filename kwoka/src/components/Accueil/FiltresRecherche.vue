<template>
  <div class="shadow-2" style="height: 140px; border-radius: 10px 10px">
    <q-tabs
      narrow-indicator
      dense
      v-model="tab"
      align="left"
      class="text-black"
      active-color="green"
      style="
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(5px);
      "
    >
      <q-tab name="logement" label="Logements" class="row font-bold" />
      <q-tab name="activite" label="Activités" />
    </q-tabs>
    <q-tab-panels
      v-model="tab"
      animated
      style="
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(5px);
      "
    >
      <q-tab-panel name="logement" class="row">
        <div class="col row">
          <div class="text-h6 col-12">Location</div>
          <q-input
            dense
            color="green"
            class="col-8"
            v-model="destination"
            label="Où désirez vous aller ?"
          />
        </div>
        <q-separator
          vertical
          color="green"
          class="q-mx-md"
          style="width: 3px"
        />
        <div class="col row">
          <div class="text-h6 col-12">Dates</div>
          <q-input
            dense
            class="col-8"
            type="date"
            color="green"
            v-model="destination"
          />
        </div>
        <q-separator
          vertical
          color="green"
          class="q-mx-md"
          style="width: 3px"
        />
        <div class="col row">
          <div class="text-h6 col-12">Voyageurs</div>
          <q-input
            dense
            class="col-8"
            color="green"
            type="number"
            v-model="destination"
          />
        </div>
        <q-btn
          color="green"
          icon="search"
          style="width: 56px; height: 56px; border-radius: 10px 10px"
        />
      </q-tab-panel>
      <q-tab-panel name="activite" class="row">
        <div class="col row">
          <div class="text-h6 col-12">Location</div>
          <q-input
            dense
            color="green"
            class="col-8"
            v-model="destination"
            label="Où désirez vous aller ?"
          />
        </div>
        <q-separator
          vertical
          color="green"
          class="q-mx-md"
          style="width: 3px"
        />
        <div class="col row">
          <div class="text-h6 col-12">Dates</div>
          <q-input
            dense
            class="col-8"
            type="date"
            color="green"
            v-model="destination"
          />
        </div>
        <q-separator
          vertical
          color="green"
          class="q-mx-md"
          style="width: 3px"
        />
        <div class="col row">
          <div class="text-h6 col-12">Voyageurs</div>
          <q-input
            dense
            class="col-8"
            color="green"
            type="number"
            v-model="destination"
          />
        </div>
        <q-btn
          color="green"
          icon="search"
          style="width: 56px; height: 56px; border-radius: 10px 10px"
        />
      </q-tab-panel>

      <q-tab-panel name="activite">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'FiltresRecherche',
  props: {},
  setup() {
    return {
      tab: ref('logement'),
      destination: '',
    };
  },
});
</script>
