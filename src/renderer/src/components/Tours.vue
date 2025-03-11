<template>
    <div class="flex">
        <Button icon="pi pi-bars" variant="text" severity="contrast" size="large"/>
        <Button label="Поиск" class="btn"/>
        <Button label="Избранное" class="btn"/>
    </div>
    <div v-if="type == 'select'">
        <TourSelect />
    </div>
    <div v-else-if="type == 'favorite'">

    </div>
    <div v-else>
        Позвоните тому идиоту, что выставил тип не select и не type (текущий тип - {{ type }})
    </div>
</template>
<script lang="ts" setup>
    import Button from 'primevue/button'

import TourSelect from './ToursComponents/TourSelect.vue';

    const props = defineProps({
        type: {
            type: String,
            default: 'select'
        }
    })


</script>
<style>
    .flex {
        display: flex
        
    }
    .btn {
        margin: 5px
    }
</style>