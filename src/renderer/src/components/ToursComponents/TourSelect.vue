<template>
        <Timeline layout="horizontal" :value="[1, 2, 3, 4]" class="tmln">
            <template #marker="slotProps">
            <div class="marker" :class="current >= slotProps.item? 'active': ''">
                <span  >
                    {{ slotProps.item }}
                </span>
            </div>    
            </template>
            <template #content="slotProps">
                <span class="marker-content">
                    Шаг {{ slotProps.item }}
                </span>
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
    .tmln {
        width: 75%;
        margin-inline: auto;
    }
    
    .marker {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 49%;
        width: 1.5em;
        height: 1.5em;
        border: solid 2px gray;
        font-family: 'Consolas', Courier, monospace;
        
    }
    .active {
        background-color: var(--p-primary-color);
        border-color: transparent;
    }
    .marker-content {
         min-width: max-content;
         font-size: smaller;
         text-wrap: nowrap
         
    }
</style>