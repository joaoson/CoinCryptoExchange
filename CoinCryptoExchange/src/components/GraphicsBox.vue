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
            type: Number,
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
                <p class="price">{{ price }}</p>
                <p>{{ percentile }}%</p>
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
        background-color: #31353f;
        padding: 0.5rem;
        border-radius: 10px;
    }

    .graphicBox{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        height: auto;
        justify-content: center;
        background-color: #1b2028;
        color: white;
        padding: 5px 10px;
        border-radius: 10px;
    }

    .cardHeader{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .itemDetails{
        display: flex;
        align-items: center;
        justify-content: space-around;
        align-items: center;
        width: 70%;
    }
    .itemDetails h3{
        margin: 0;
    }
    .graphics{
        width: 100%;
    }

    .numbers{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .numbers .price{
        font-weight: bold;
    }
    
</style>