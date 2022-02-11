/* eslint-disable @typescript-eslint/no-floating-promises */
<template>
    <q-page class="row">
        <div class="col-12 text-center q-mt-lg" style="min-height:100vh">
            <q-drawer v-model="drawer" show-if-above :width="560" class="shadow-2" style="background:#F3F3F3">
                <q-list padding class="menu-list">
                    <q-item clickable v-ripple @click="tab = 'frederic'" :active="tab == 'frederic'" active-class="active-conversation">
                        <q-item-section avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png" style="border-radius: 50%; width:86px;height:86px" />
                        </q-item-section>
    
                        <q-item-section class="row">
                            <q-item-label class="text-left" style="font-size:24px">Frédéric</q-item-label>
                            <q-item-label class="text-left" style="font-size:16px">Bonsoir, malheureusement mon loge...</q-item-label>
                            <q-item-label class="text-left" style="font-size:16px">14/04/2022</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple @click="tab = 'julia'" :active="tab == 'julia'" active-class="active-conversation">
                        <q-item-section avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png" style="border-radius: 50%; width:86px;height:86px" />
                        </q-item-section>
    
                        <q-item-section class="row">
                            <q-item-label class="text-left" style="font-size:24px">Julia</q-item-label>
                            <q-item-label class="text-left" style="font-size:16px">Bonjour, votre logement est il touj...</q-item-label>
                            <q-item-label class="text-left" style="font-size:16px">27/02/2022</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple @click="tab = 'frederic1'" :active="tab == 'frederic1'" active-class="active-conversation">
                        <q-item-section avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png" style="border-radius: 50%; width:86px;height:86px" />
                        </q-item-section>
    
                        <q-item-section class="row">
                            <q-item-label class="text-left" style="font-size:24px">Frédéric</q-item-label>
                            <q-item-label class="text-left" style="font-size:16px">Bonsoir, malheureusement mon loge...</q-item-label>
                            <q-item-label class="text-left" style="font-size:16px">14/04/2022</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple @click="tab = 'frederic2'" :active="tab == 'frederic2'" active-class="active-conversation">
                        <q-item-section avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png" style="border-radius: 50%; width:86px;height:86px" />
                        </q-item-section>
    
                        <q-item-section class="row">
                            <q-item-label class="text-left" style="font-size:24px">Frédéric</q-item-label>
                            <q-item-label class="text-left" style="font-size:16px">Bonsoir, malheureusement mon loge...</q-item-label>
                            <q-item-label class="text-left" style="font-size:16px">14/04/2022</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple @click="tab = 'frederic3'" :active="tab == 'frederic3'" active-class="active-conversation">
                        <q-item-section avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png" style="border-radius: 50%; width:86px;height:86px" />
                        </q-item-section>
    
                        <q-item-section class="row">
                            <q-item-label class="text-left" style="font-size:24px">Frédéric</q-item-label>
                            <q-item-label class="text-left" style="font-size:16px">Bonsoir, malheureusement mon loge...</q-item-label>
                            <q-item-label class="text-left" style="font-size:16px">14/04/2022</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-drawer>
            <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
                <q-tab-panel name="frederic">
                    <div class="row text-left q-pl-lg" style="height:90px;">
                        <div class="col-12" style="font-size:24px">
                            Frederic - Bruz
                        </div>
                        <div class="col-12" style="font-size:12px">
                            Répond généralement sous 1 heure
                        </div>
                    </div>
                    <div class="row text-left q-pl-lg" style="position:fixed;bottom:40px;width:100%">
                        <div class="row col-12 items-center">
                            <q-icon name="link" size="30px"/> 
                            <q-input class="q-pl-lg" dense outlined rounded style="width:50%" placeholder="Saisissez votre message"/> 
                        </div>
                    </div>
                    <q-separator />
                </q-tab-panel>
                <q-tab-panel name="julia">
                    <div class="row text-left q-pl-lg" style="height:90px;">
                        <div class="col-12" style="font-size:24px">
                            Julia - Bain-sur-Oust
                        </div>
                        <div class="col-12" style="font-size:12px">
                            Répond généralement sous 1 heure
                        </div>
                    </div>
                    <div class="row text-left q-pl-lg" style="position:fixed;bottom:40px;width:100%">
                        <div class="row col-12 items-center">
                            <q-icon name="link" size="30px"/> 
                            <q-input class="q-pl-lg" dense outlined rounded style="width:50%" placeholder="Saisissez votre message"/> 
                        </div>
                    </div>
                    <q-separator />
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
.active-conversation {
    background: #C4C4C4 !important;
    color: black;
}
</style>
