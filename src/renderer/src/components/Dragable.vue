<template>
    <div draggable="true" @dragstart="drag($event)">
        <slot />
    </div>
</template>

<script setup lang="ts">

    function drag(event) {
        emits('Drag', event, {...props.data});
        event.dataTransfer.setData('drag', JSON.stringify({...props.data}));
    }
    const props = defineProps({
        data: {
            type: Object,
            default: null
        }
    });
    const emits = defineEmits(['Drag']);
</script>