<template>
        <Timeline layout="horizontal" :value="[1, 2, 3, 4]" class="tmln">
            <template #marker="slotProps">
            <div class="marker" :class="current >= slotProps.item? 'active': ''"  @click="changeStep(slotProps.item)">
                <span  >
                    {{ slotProps.item }}
                </span>
            </div>    
            </template>
            <template #content="slotProps">
                
                <div class="marker-content" @click="changeStep(slotProps.item)">
                    Шаг {{ slotProps.item }}
                </div>
            </template>
            <template #connector="slotProps" >
                <div class="connector" :class="current > slotProps.item? 'active': ''">
                    
                </div>
            </template>
        </Timeline>
        <div class="form" >
            <MainInformationForm v-if="current == 1" v-model:data="data"/>
            <PreferredTypesForm v-if="current == 2" v-model:data="data" />
            <HotelConditionsForm v-if="current == 3" v-model:data="data"/>
            <TourSuggestions v-if="current == 4" :data="data"/>
        </div>
        <div class="buttons">
            <Button label="Пропустить" />
            <Button label="Далее" icon="pi pi-angle-right" @click="changeStep(current + 1)"/>
        </div>
</template>
<script lang="ts" setup>
    import Timeline from 'primevue/timeline';
    import Button from 'primevue/button'
    import { ref, onMounted } from 'vue';
import MainInformationForm from './MainInformationForm.vue';
import PreferredTypesForm from './PreferredTypesForm.vue';
import HotelConditionsForm from './HotelConditionsForm.vue';
import TourSuggestions from './TourSuggestions.vue';
    const props = defineProps({
        current: {
            type: Number,
            default: 2
        }
    })
    const current = ref()
    const data = ref({});
    function changeStep(step: number){
        if(step > 4){
            step = 4
        }
        current.value = step;
    }

    onMounted(() => {
        current.value = props.current
    })

</script>
<style scoped>
    .tmln {
        width: 75%;
        margin-inline: auto;
        max-width: 600px;
    }
    
    .marker {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 49%;
        min-width: 2em;
        min-height: 2em;
        border: solid 2px var(--p-slate-400);
        font-family: 'Consolas', Courier, monospace;
        cursor: pointer;
        transition: background-color linear .3s ;
    }
    .connector {
        background-color: var(--p-slate-400);
        height: 2px;
        flex-grow: 1;
        transition: background-color linear .3s ;
    }
    .active {
        background-color: var(--p-primary-color);
        border-color: transparent;
        color: white;
    }
    .active:hover {
        background-color: var(--p-primary-700);
    }
    .marker-content {
         min-width: max-content;
         font-size: smaller;
         text-wrap: nowrap
         
    }
    .form {
        background-color: var(--p-slate-100);
        margin-inline: auto;
        min-height: 350px;
        max-height: 60%;
        width: 75%;
        border: solid 2px var(--p-primary-400);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2em;
        gap: 1.5em;
        border-radius: 2px;
        max-width: 700px;
    }
    .buttons {
        display: flex;
        gap: 1rem;
        margin-inline: auto;
        margin-top: 1em;
        justify-content: center;
    }
</style>