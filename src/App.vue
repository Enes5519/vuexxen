<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style></style>
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  components: { Footer, Header }
};
</script>
