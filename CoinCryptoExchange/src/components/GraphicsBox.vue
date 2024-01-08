<script setup>

</script>

<template>
    <div class="cardHeader">
        <img src="{{url}}" alt="icon">
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