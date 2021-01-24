<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style></style>
<script>
import Header from '@/components/Header';
export default {
  components: { Header }
};
</script>
