<script setup>
    import CryptoInfoBox from './CryptoInfoBox.vue';
</script>

<template>

    <div class="square">
        <h1 class="title">Real-time price</h1>
        <CryptoInfoBox name="Etherium" />
    </div>

</template>

<style scoped>
.square {
    background-color: #1b2028;
    width: 400px;
    height: 500px;
    color: white;
    border-radius: 10px;
}
.title{
    padding: 30px;
    font-size: 25px;
}
</style>