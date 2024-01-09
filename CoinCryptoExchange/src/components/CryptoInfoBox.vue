<template>
    <div class="data">
        <div class="image-square">
            <img src="" alt="imagem">
        </div>
        <div class="up-info">
            <h1 class="name">{{ name }}</h1>
            <h3 :class="{ 'negative-percentage': porcentage < 0, 'positive-percentage': porcentage >= 0 }">
            {{ porcentage >= 0 ? '+' : '' }}{{ porcentage.toFixed(2) }}%
            </h3>
        </div>
        <div class="down-info">
            <h1 class="money">{{ money }}</h1>
            <h3 class="crypto-money">{{  }}</h3>  <!-- Necessita de uma api para converter o valor em crypto !--> 
        </div>
    </div>
</template>

<script setup>

defineProps({
    name: {
        type: String,
        required: true
    },
    porcentage: {
        type: Number,
        required: true
    },
    money: {
        type: Number,
        required: true
    }
})

</script>

<style scoped>
.data {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
}
.data:hover {
    background-color: rgb(51, 50, 50);
}
.image-square {
    width: 45px;
    height: 45px;
    background-color: grey;
    border-radius: 7px;
}
.name {
    color: white;
    font-size: 12px;
    margin: auto;
}
.up-info {
    display: flex;
    margin-top: -55px;
}
.negative-percentage {
    font-size: 12px;
    color: red;
}
.positive-percentage {
    font-size: 12px;
    color: green;
}
.money{
    font-size: 12px;
    margin: auto;
    color: grey;
}
.crypto-money {
    font-size: 12px;
}
.down-info {
    display: flex;
}
</style>
