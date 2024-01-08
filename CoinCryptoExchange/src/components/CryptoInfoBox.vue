<script setup>
defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>

<template>

    <div class="data">
        <div class="image-square">
            <img src="" alt="imagem">
        </div>
        <div class="info">
            <h1 class="name">{{ name }}</h1>
        </div>
    </div>

</template>

<style scoped>
.data {
    padding-left: 30px;
}
.image-square {
    width: 45px;
    height: 45px;
    background-color: grey;
    border-radius: 7px;
}
.name {
    color: white;
    font-size: 15px;
    margin: auto;
}
</style>