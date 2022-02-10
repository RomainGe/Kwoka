/* eslint-disable @typescript-eslint/no-floating-promises */
<template>
    <q-page class="row">
        <div class="row q-mb-xl col-12 image-fond" style="height: calc(85vh - 92px); position: relative">
            <div class="col-4 offset-2" style="display: flex;justify-content: center;align-content: center;flex-direction: column;">
                <div class="text-h3">
                    <div class="text-h3" style="font-size:40px; font-weight:700;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div class="row text-h5 q-pt-md">
                    <div class="" style="font-size:16px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum rhoncus, etiam mattis cursus nulla elit aliquam aliquet. Vestibulum, sit lobortis in amet.
                    </div>
                </div>
                <div>
                    <q-btn color="green" class="q-my-md">Lire l'article </q-btn>
                </div>
            </div>
        </div>
        <div class="col-8 offset-2">
            <div class="row">
                <q-input class="col-6" bottom-slots v-model="text" label="Rechercher" dense/>
            </div>
            <div style="font-size:32px; margin-top:40px">
                Les Derniers articles
            </div>
            <div class="row">
                <q-card class="col-4 q-pa-md" flat>
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">
                    <q-card-section>
                        <div style="font-size:12px">02/03/2021</div>
                        <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                    </q-card-section>
    
                    <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                    </q-card-section>
                    <q-card-actions>
                        <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="col-4 q-pa-md" flat>
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">
                    <q-card-section>
                        <div style="font-size:12px">02/03/2021</div>
                        <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                    </q-card-section>
    
                    <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                    </q-card-section>
                    <q-card-actions>
                        <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="col-4 q-pa-md" flat>
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">
                    <q-card-section>
                        <div style="font-size:12px">02/03/2021</div>
                        <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                    </q-card-section>
    
                    <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                    </q-card-section>
                    <q-card-actions>
                        <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                    </q-card-actions>
                </q-card>
            </div>
            <div style="font-size:32px; margin-top:40px">
                Les articles populaires
            </div>
            <div class="row">
                <q-card class="col-4 q-pa-md" flat>
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">
                    <q-card-section>
                        <div style="font-size:12px">02/03/2021</div>
                        <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                    </q-card-section>
    
                    <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                    </q-card-section>
                    <q-card-actions>
                        <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="col-4 q-pa-md" flat>
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">
                    <q-card-section>
                        <div style="font-size:12px">02/03/2021</div>
                        <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                    </q-card-section>
    
                    <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                    </q-card-section>
                    <q-card-actions>
                        <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="col-4 q-pa-md" flat>
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">
                    <q-card-section>
                        <div style="font-size:12px">02/03/2021</div>
                        <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                    </q-card-section>
    
                    <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                    </q-card-section>
                    <q-card-actions>
                        <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                    </q-card-actions>
                </q-card>
            </div>
            <div v-if="!expand" class="text-center" style="margin: 50px 0 100px 0">
                <q-btn color="green" class="q-mx-sm" @click="expand=true">Voir tous les articles </q-btn>
            </div>
            <div v-else>
                <div class="row">
                    <q-card class="col-4 q-pa-md" flat>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        <q-card-section>
                            <div style="font-size:12px">02/03/2021</div>
                            <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                        </q-card-section>
    
                        <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                        </q-card-section>
                        <q-card-actions>
                            <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                        </q-card-actions>
                    </q-card>
                    <q-card class="col-4 q-pa-md" flat>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        <q-card-section>
                            <div style="font-size:12px">02/03/2021</div>
                            <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                        </q-card-section>
    
                        <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                        </q-card-section>
                        <q-card-actions>
                            <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                        </q-card-actions>
                    </q-card>
                    <q-card class="col-4 q-pa-md" flat>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        <q-card-section>
                            <div style="font-size:12px">02/03/2021</div>
                            <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                        </q-card-section>
    
                        <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                        </q-card-section>
                        <q-card-actions>
                            <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>
                <div class="row">
                    <q-card class="col-4 q-pa-md" flat>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        <q-card-section>
                            <div style="font-size:12px">02/03/2021</div>
                            <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                        </q-card-section>
    
                        <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                        </q-card-section>
                        <q-card-actions>
                            <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                        </q-card-actions>
                    </q-card>
                    <q-card class="col-4 q-pa-md" flat>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        <q-card-section>
                            <div style="font-size:12px">02/03/2021</div>
                            <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                        </q-card-section>
    
                        <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                        </q-card-section>
                        <q-card-actions>
                            <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                        </q-card-actions>
                    </q-card>
                    <q-card class="col-4 q-pa-md" flat>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        <q-card-section>
                            <div style="font-size:12px">02/03/2021</div>
                            <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                        </q-card-section>
    
                        <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                        </q-card-section>
                        <q-card-actions>
                            <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>
                <div class="row">
                    <q-card class="col-4 q-pa-md" flat>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        <q-card-section>
                            <div style="font-size:12px">02/03/2021</div>
                            <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                        </q-card-section>
    
                        <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                        </q-card-section>
                        <q-card-actions>
                            <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                        </q-card-actions>
                    </q-card>
                    <q-card class="col-4 q-pa-md" flat>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        <q-card-section>
                            <div style="font-size:12px">02/03/2021</div>
                            <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                        </q-card-section>
    
                        <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                        </q-card-section>
                        <q-card-actions>
                            <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                        </q-card-actions>
                    </q-card>
                    <q-card class="col-4 q-pa-md" flat>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        <q-card-section>
                            <div style="font-size:12px">02/03/2021</div>
                            <div class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur</div>
                        </q-card-section>
    
                        <q-card-section class="q-pt-none" style="color:#585B65; font-weight: 12px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at sed dictumst turpis vulputate sit maecenas sodales.
                        </q-card-section>
                        <q-card-actions>
                            <q-btn outline color="green" class="q-mx-sm">Lire l’article </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    components: {},
    name: 'Blog',

    setup() {
        return {
            text: null,
        };
    },
    data() {
        return {
            expand: false,
        };
    },
});
</script>

<style scoped>
.image-fond {
    background-image: url('../assets/fond_blog.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
