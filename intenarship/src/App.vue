<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
//import Home from './views/home.vue';
</script>
<template>
  <Navbar/>
  <RouterView/>
 <Footer/>
  <!-- <Home/> -->
</template>