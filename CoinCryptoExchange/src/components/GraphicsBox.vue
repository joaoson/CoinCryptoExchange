<script setup>

    defineProps({
        coinName: {
            type: String,
            required: true
        },
        coinAbrev: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        percentile: {
            type: String,
            required: false,
            default:"oie"
        },
        url: {
            type: String,
            required: true
        },    
    })

    let imgPreUrl = "https://s2.coinmarketcap.com/static/img/coins/64x64/"
</script>

<template>
    <div class="graphicBox">
        <div class="cardHeader">
            <img class="imgGraphics" :src="'https://s2.coinmarketcap.com/static/img/coins/64x64/' + url" alt="icon">
            <div class="itemDetails">
                <h3 id="nome">{{ coinName }}</h3>
                <h4>{{ coinAbrev }}</h4>
            </div>
        </div>
        <div class="graphics">
            <div class="numbers">
                <p>{{ price }}</p>
                <p>{{ percentile }}</p>
            </div>
    
        </div>
    </div>
</template>

<style scoped>
    .imgGraphics{
        aspect-ratio: 1/1 !important;
        width:  60%;
        max-width: 40px;
        max-height: 40px;
    }

    .graphicBox{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        height: auto;
    }

    .cardHeader{
        width: 100%;
        display: flex;
        align-items: center;
    }
    .itemDetails{
        display: flex;
        align-items: center;
    }
    
</style>