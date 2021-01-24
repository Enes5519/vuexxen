<template>
  <header :class="{ scroll: hasScrollClass }">
    <ExxenLogo class="logo" />
    <nav>
      <router-link class="active" to="/">Anasayfa</router-link>
      <router-link to="/explore">Keşfet</router-link>
      <router-link to="/my-list">Listelerim</router-link>
    </nav>
    <SearchBox />
    <div class="profile">
      <img src="../assets/avatar.png" alt="Avatar" />
      <span>Enes Yıldırım</span>
    </div>
  </header>
</template>

<script>
import ExxenLogo from '@/assets/logo.svg';
import SearchBox from '@/components/SearchBox';

export default {
  name: 'Header',
  components: {
    SearchBox,
    ExxenLogo
  },
  data() {
    return {
      hasScrollClass: false
    };
  },
  mounted() {
    window.addEventListener(
      'scroll',
      () => (this.hasScrollClass = window.scrollY > 50)
    );
  }
};
</script>

<style scoped>
header {
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-image: linear-gradient(
    to bottom,
    #171717,
    rgba(10, 10, 10, 0.8) 98%
  ) !important;
}

.scroll {
  background-color: #212121;
}

.logo {
  height: 40px;
  width: 92px;
}

nav {
  flex: 0.9 1 auto;
}

nav > a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  font-weight: 500;
  height: 60px;
}

nav > .router-link-active {
  color: #feca07;
  border-top: 2px solid #feca07;
}

.profile {
  display: flex;
  align-items: center;
}

.profile > img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
}

.profile > span {
  font-weight: 500;
}
</style>
