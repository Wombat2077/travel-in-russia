<template>
    <DataTable :value="tours" :paginator="true" :rows="10" :rowsPerPageOptions="[5,10,20]" show-gridlines resizable-columns>
        <Column field="country" header="Страна"></Column>
        <Column field="city" header="Город"></Column>
        <Column field="hotel" header="Отель"></Column>
        <Column field="dates" header="Даты"></Column>
        <Column field="cost" header="Стоимость"></Column>
        <Column header="Избран">
            <template #body="slotProps">
                <i :class="slotProps.data.favorite ? 'pi pi-star' : 'pi pi-star-o'"></i>
            </template>
        </Column>
        <Column header="Бронь">
            <template #body="slotProps">
                <Button label="Забронировать" />
            </template>
        </Column>
        <template #empty>
            <div class="p-text-center">
                <span>Нет данных</span>
            </div>
        </template>
    </DataTable>
    <a href="/" target="_blank">Посмотреть все туры</a>
</template>
<script setup lang="ts">
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import {ref } from 'vue';

    const props = defineProps({
        data: {
            type: Object,
            default: []
        }
    })
    const tours = ref([])
</script>