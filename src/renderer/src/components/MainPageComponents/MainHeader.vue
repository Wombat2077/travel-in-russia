<script setup lang="ts">
    import Button from 'primevue/button'
</script>
<template>
    <div class="header">
    <img src="@resources/icon.png" class="logo"/>
    <div>
        <h1>
            Путешествуй 
            <div>по России</div>
        </h1>
    </div>
    <div>
       <div class="button-bar">
        <Button label="Бронирование" />
        <Button label="Туристам"/>
        <Button label="Турагенствам"/>
    </div> 
    </div>
    </div>
</template>
<style scoped>
    .logo {
        width: 10%;
        margin-left: 0;

    }
    .header {
        width: 100%;
        padding-left: 2em;
        display: flex;
        justify-content: space-between;
    }
    .button-bar > * {
        margin-inline: 0.5em;
        margin-top: 0;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1em;
        font-weight: 100;
    }
    .p-button-label {
        font-weight: 100;
        font-size: 1.5rem;
    }
    .header > div > h1 {
        margin-block: auto;
    }
</style>