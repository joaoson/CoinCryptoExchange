<script setup>
    import GraphicsBox from './GraphicsBox.vue';
    defineProps({
        jobs: {
            type: Array,
            required: true
        }})
</script>

<template>
    <div class="graphicBanner">
        <div class="wrapperGraphics" v-for="job in jobs.slice(0, 5)">
        <GraphicsBox :url="job.id + '.png'" :coinName="job.name" :coinAbrev="job.symbol" price="300"/>
      </div>
    </div>
</template>

<style scoped>
    .graphicBanner{
        display: flex;
        width: 80%;
        height: 20vh;
    }
    .wrapperGraphics{
        width: 20%;
        display: flex;
    }

</style>