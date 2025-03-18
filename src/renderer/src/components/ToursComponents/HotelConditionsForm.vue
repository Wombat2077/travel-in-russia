<template>
    
    <label class="label">
        Качество отеля
    </label>
    <Rating class="rating"/>

    <FloatLabel>
        <Select class="combobox" :options="[]" :loading="IsSelectLoading" /> 
        <label>
            Тип питания
        </label>
    </FloatLabel>
    <Panel>
        <template #header>
            <div class="panel__header">
                Дополнительные услуги
            </div>
        </template>
        <div class="panel__content">
        <div v-for="service in additionalServices" class="service">
            <Checkbox class="checkbox" :input-id="'service-'+service.id" name="form.additionalServices" :value="service.id"/>
            <label :for="'service-'+service.id">
                {{ service.name }}
            </label>
        </div>
    </div>
    </Panel>
    <div>
        Стоимость тура
    </div>
    <Slider range :min="0" :max="15000" v-model="form.CostRange" />
</template>
<script lang="ts" setup>
    import Rating from 'primevue/rating';
    import FloatLabel from 'primevue/floatlabel'
    import Select from 'primevue/select';
    import Panel from 'primevue/panel';
    import Checkbox from 'primevue/checkbox';
    import Slider from 'primevue/slider';
    import { ref, Ref, onMounted, reactive, computed } from 'vue';
    import type { Service } from '@renderer/services/ServicesService';
    import { ServicesService } from '@renderer/services/ServicesService';

    const additionalServices: Ref<Service[]> = ref([])
    const form = reactive({
        quality: 0,
        foodType: null,
        additionalServices: [],
        CostRange: [0, 1000]
    })
    const IsSelectLoading = ref(true);
    const minCost = computed(() => `"${form.CostRange[0].toString()}"`);
    const maxCost = computed(() => `"${form.CostRange[1].toString()}"`);
    const props = defineModel('data', {
        type: Object,
        required: true
    })
    onMounted(() => {
        ServicesService.getServices().then((services) => {
            console.log([services]);
            additionalServices.value = services
        }).catch((error) => {
            console.error(error)
        })
    })
</script>
<style>
    .rating {
        --p-rating-icon-size: 1.5rem;
    }
    .combobox {
        min-width: 250px;
    }
    .p-panel {
        width: 90%
    }
    .p-panel-header {
        font-size: 0.8rem;
        margin: 0;
    }
    .panel__content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 0.5rem;
        width: 100%;
    }
    .service {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .p-slider {
        min-width: 90%;
        margin-top: 2.5em;
    }
    .checkbox {
        margin: 0.5rem;
    }
    .p-slider-handle[data-pc-section="starthandler"]::after {
        content: v-bind('minCost');
        margin-top: -2.5em;
        margin-left: -1em;

    }
    .p-slider-handle[data-pc-section="endhandler"]::after{
        content: v-bind('maxCost');
        margin-top: -2.5em;
        margin-left: -1em;
    }
</style>