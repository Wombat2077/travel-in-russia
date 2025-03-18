<template>
    <FloatLabel>
        <DatePicker v-model="form.startDate" />
        <label>Дата начала периода</label>
    </FloatLabel>
    <FloatLabel>
        <DatePicker v-model="form.endDate" />
        <label>Дата начала периода</label>
    </FloatLabel>
    <FloatLabel>
        <InputNumber v-model="form.dayCount" />
        <label>Количество дней</label>
    </FloatLabel>
    <FloatLabel>
        <InputNumber v-model="form.peopleCount" />
        <label>Количество человек</label>
    </FloatLabel>
    <div>
        <Checkbox v-model="form.hasChildren" class="check" binary />
        <label>Дети</label>
    </div>
</template>
<script lang="ts" setup>
    import DatePicker from 'primevue/datepicker';
    import InputNumber from 'primevue/inputnumber';
    import Checkbox from 'primevue/checkbox'
    import FloatLabel from 'primevue/floatlabel';
    import { reactive, watch } from 'vue';
    const form = reactive({
        startDate: null,
        endDate: null,
        dayCount: null,
        peopleCount: null,
        hasChildren: false
    })
    const model = defineModel('data', {
        type: Object,
        required: true
    });
    watch(form, () => {
        model.value = {...model.value, ...form}
    }, {deep: true});
</script>
<style scoped>
.group {
    gap: 1em;
    justify-content: end;
}
.check {
    margin-right: 1em;
}
</style>