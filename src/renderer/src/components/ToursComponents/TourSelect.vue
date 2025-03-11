<template>
        <Timeline layout="horizontal" :value="[1, 2, 3, 4]" class="tmln">
            <template #marker="slotProps">
            <span  :class="current >= slotProps.item? 'active': ''">
                {{ slotProps.item }}
            </span>
            </template>
            <template #content="slotProps">
                Шаг {{ slotProps.item }}
            </template>
        </Timeline>

</template>
<script lang="ts" setup>
    import Timeline from 'primevue/timeline';
    defineProps({
        current: {
            type: Number,
            default: 1
        }
    })
</script>
<style scoped>
    span {
        border-radius: 50%;
        width: 1.5em;
        height: 1.5em;
        
    }
    .active {
        background-color: var(--p-primary-color);
    }
</style>