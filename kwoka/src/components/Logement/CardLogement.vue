<template>
  <div class="row" style="">
    <img
      src="~assets/exemple-logement2.png"
      class="col"
      style="height: auto; border-radius: 5px"
    />
    <div class="col-8 q-pa-md text-black">
      <div
        class="bg-tiny-house text-white text-center"
        style="width: 83px; height: 22px; border-radius: 5px; font-size: 12px"
      >
        Tiny House
      </div>
      <div class="" style="font-size: 24px">Tiny House près de la plage</div>
      <div class="" style="font-size: 16px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
        ultrices eget consequat, egestas nunc.
      </div>
      <div class="q-pt-md" style="font-size: 12px">
        Lorem ipsum dolor sit amet
      </div>
      <div class="" style="font-size: 12px">Lorem ipsum dolor</div>
      <div class="row q-py-sm">
        <div class="col" style="font-size: 12px">Etoiles</div>
        <div class="col text-right" style="font-size: 12px">53€/nuit</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardLogement',
});
</script>
