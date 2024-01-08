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
            required: false
        }
        })
</script>

<template>
    <div class="cardHeader">
        <img src="" alt="icon">
        <div class="itemDetails">
            <h3>{{ coinName }}</h3>
            <h4>{{ coinAbrev }}</h4>
        </div>
    </div>
    <div class="graphics">
        <div class="numbers">
            <p>{{ price }}</p>
            <p>{{ percentile }}</p>
        </div>

    </div>
</template>

<style scoped>

</style>