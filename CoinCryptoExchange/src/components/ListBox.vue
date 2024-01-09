<script setup>
    import CryptoInfoBox from './CryptoInfoBox.vue';

    defineProps({
        money: {
            type: Number,
            required: true
        }
    });

    const formatMoney = (value) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    };
</script>

<template>
    <div class="square">
        <h1 class="title">Real-time price</h1>
        <div class="cryptos">
            <CryptoInfoBox name="Etherium" :porcentage="7.63" :money="formatMoney(money)"/>
            <CryptoInfoBox name="Bitcoin" :porcentage="5.21" :money="formatMoney(money)"/>
            <CryptoInfoBox name="Litecoin" :porcentage="-11.50" :money="formatMoney(money)"/>
        </div>
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
.cryptos {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
