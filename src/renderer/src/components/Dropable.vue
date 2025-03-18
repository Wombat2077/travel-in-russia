<template>
    <div @dragover.prevent="emits('DragOver')" @drop="drop($event)">
        <slot />
    </div>
</template>
<script setup lang="ts">
    const emits = defineEmits(['Drop', 'DragOver']);
    function drop(event: DragEvent){
        let data = JSON.parse(event.dataTransfer? event.dataTransfer.getData('drag'): 'null');
        emits('Drop', event, data)
    }
</script>