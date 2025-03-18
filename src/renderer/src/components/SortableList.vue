<template>
        <Dropable v-for="item, index in modelValue" @drop="moveItem($event, index)">
            <Dragable @drag="startMoveItem($event, index)" :data="item">
                <slot name="item"  :data="item" :index="index"/>
            </Dragable>
        </Dropable>
</template>
<script lang="ts" setup>
import Dropable from './Dropable.vue';
import Dragable from './Dragable.vue';

    const emits = defineEmits()
    var local = false
    const model = defineModel({
            type: Array<object>,
            default: []
        })
    //const _items: Ref<Array<object>> = ref([])
    function moveItem(event: DragEvent, index: number){
        if(local){
            event.stopPropagation();
            local = false
        }
        let data: number | null = event.dataTransfer ? 
                                        JSON.parse(event.dataTransfer.getData('index') != "" ?
                                            event.dataTransfer.getData('index'):
                                            'null'
                                        ): 
                                     null;
        if(data == null){
            return;
        }
        let item = model.value.splice(data, 1)
        model.value.splice(index, 0, ...item)
    }
    function startMoveItem(event: DragEvent, index: number){
        event.dataTransfer?.setData('index', JSON.stringify(index));
        
        local = true;
    }

</script>