<template>
    <div class="flex full" v-if="!IsLoading">
        <Dropable class="types" @Drop="addItem($event,  'types')">
            <Draggable v-for="type in Types" @Drag="remove($event, 'types')" :data="type" class="type">
                {{ type.name }}
            </Draggable>
        </Dropable>
        <Dropable class="selected" @Drop="addItem($event,  'selected')" @DragOver="showPlaceholder">
            <SortableList v-model="selected" class="selected">
            <template #item="slotProps" >
                <div class="flex type">
                    <div style="margin-right: 1em">
                        {{ slotProps.index + 1 }}
                    </div>
                    <div>
                        {{ slotProps.data['name'] }}
                    </div>
                </div>
            </template>
        </SortableList>
        </Dropable>
    </div>
    <div class="flex col full" v-else>
        Загрузка
        <div class="pi pi-spin pi-spinner" style="font-size: 3em;"></div>
    </div>
</template>
<script setup lang="ts">
    import {  onMounted, ref, Ref } from 'vue';
    import Draggable from '../Dragable.vue';
    import Dropable from '../Dropable.vue';
    import SortableList from '../SortableList.vue';
    import type { TourType } from '@renderer/services/TourService';
    import { TourService } from '@renderer/services/TourService';

    const props = defineProps({
        types: {
            type: Array<TourType>,
            default: []
        }
    })
    const model = defineModel('data', {
        type: Object,
        required: true
    });
    const emits = defineEmits();

    const IsLoading = ref(true);
    const IsShowPlaceholder = ref(false)
    const Types: Ref<TourType[]> = ref([])
    const selected: Ref<TourType[]> = ref([])


    function remove(event,  source){
        event.dataTransfer.setData('source', source)
        event.target.classList.add('removed')
    }
    function addItem(event, target){
        let data = JSON.parse(event.dataTransfer.getData('drag'))
        if(target == 'selected' && event.dataTransfer?.getData('source') != 'selected'){
            Types.value = Types.value.filter(i => i.id != data.id);
            selected.value.push(data);
        }
        else {
            selected.value = selected.value.filter(i => i.id != data.id);
            Types.value.push(data);
        }
        emits('update:data', {
            ...model.value,
            preferredTypes: selected.value
        });
    }
    function showPlaceholder(){
        IsShowPlaceholder.value = true
    }


    onMounted(() => {
        TourService.getTypes().then((types) => {
            Types.value = types.data;
            IsLoading.value = false;
        })
    })
</script>
<style scoped>
    .types, .selected{
        border: solid 2px var(--p-slate-200);
        min-width: 45%;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        min-height: 100%;
    }
    .full {
        min-width: 100%;
        min-height: 100%;
        margin: 0;
        flex-grow: 1;
    }
    .flex {
        justify-content: space-between;
    }
    .col {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    .type {
        background-color: var(--p-primary-color);
        padding: 1.5rem;
        padding-bottom: .5rem;
        transition: transform 1s linear;
        color: white;
        border-radius: 2px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom: solid 8px var(--p-primary-700);
        border-left: solid 10px var(--p-primary-700)

    }
    .type:hover {
        background-color: var(--p-primary-600);
        border-color: var(--p-primary-500);
    }
</style>