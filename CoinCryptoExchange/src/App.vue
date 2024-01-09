<script setup>
  import ListBox from './components/ListBox.vue'
  import GraphicsBox from './components/GraphicsBox.vue';

  fetch('http://127.0.0.1:3000/api')
  .then(response => response.json())
  .then(data => {
    // Use the received data in your front-end application
    console.log(data);
    // Perform actions to display data on your UI
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors in fetching data
  });

</script>

<template>
  <header>
    <ListBox money="1000" />
    <GraphicsBox coinName="Joao" coinAbrev="jv" price="300"/>
  </header>

  <main>
  </main>

</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  *,body,html{
    font-family: 'Poppins', sans-serif;
  }
</style>
