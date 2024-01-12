<script setup>
    import GraphicsBox from './GraphicsBox.vue';
    defineProps({
        jobs: {
            type: Array,
            required: true
        }})

        const formatMoney = (value) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    };
</script>

<template>
    <div class="graphicBanner">
        <div class="wrapperGraphics" v-for="job in jobs.slice(0, 5)">
        <GraphicsBox :url="job.id + '.png'" :coinName="job.name" :coinAbrev="job.symbol" :price="formatMoney(job.quote.USD.price)" :percentile="job.quote.USD.percent_change_7d.toFixed(2)" />
      </div>
    </div>
</template>

<style scoped>
    .graphicBanner{
        display: flex;
        width: 100%;
        height: auto;
        justify-content: space-between;
    }
    .wrapperGraphics{
        width: 18%;
        display: flex;
        
    }

</style>