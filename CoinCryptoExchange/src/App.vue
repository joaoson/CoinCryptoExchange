<script setup>
  import ListBox from './components/ListBox.vue'
  import GraphicsBanner from './components/GraphicsBanner.vue';
</script>
<script>
  export default {
  data() {
    return {
      jobs: [],
    }
  },
  mounted() {
    fetch('http://127.0.0.1:3000/api')
      .then(res => res.json())
      .then(data => this.jobs = data.data.data)
      .catch(err => console.log(err.message))
  }
}

</script>

<template>
  <div v-if="jobs.length" class="job">
    <div class="sidebar">
      <nav></nav>
    </div>
    <div class="main">
      <header id="header">
        <GraphicsBanner :jobs="jobs" />
      </header>
      
      <main>
        <ListBox money="1000" />
      </main>
    </div>
  </div>
  <div v-if="!jobs.length"  class="loaderScreen">
    <span class="loader"></span>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  *,body,html{
    font-family: 'Poppins', sans-serif;
  }

  body,html{
    padding: 0;
    margin: 0;
  }

  header{
    width: 100%;
    align-self: flex-end;
  }

  body{
    background-color: #31353f;
    width: 100%;
    height: 100vh;
    display: flex;
  }

  .job{
    width: 100%;
    height: 100vh;
    display: flex;
  }

  .sidebar{
    width: 20%;
    height: 100vh;
  }

  .main{
    width: 80%;
  }

  main{
    height: 60vh;
  }

  .loaderScreen{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
  }
  .loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite
    }
    .loader::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid #FFF;
      animation: prixClipFix 2s linear infinite ;
    }

    @keyframes rotate {
      100%   {transform: rotate(360deg)}
    }

    @keyframes prixClipFix {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }
</style>

