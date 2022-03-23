<template>
  <div class="">
    {{image}}
    <img
      src="'../../assets/'+'"
      style="width: 100%; height: auto"
    />
    <div class="text-h6">Lorem ipsum dolor sit amet.</div>
    <div>Lorem ipsum</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardLogementAccueil',
  props: {
    image: String
  },
});
</script>
