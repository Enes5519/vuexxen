<template>
  <header :class="{ scroll: hasScrollClass }">
    <hamburger-icon class="mobile-nav-icon" @click="display = !display" />
    <exxen-logo class="logo" />
    <nav :class="{ active: display }">
      <router-link to="/">Anasayfa</router-link>
      <router-link to="/explore">Keşfet</router-link>
      <router-link to="/my-list">Listelerim</router-link>
    </nav>
    <SearchBox class="hide-in-mobile" />
    <div class="profile hide-in-mobile">
      <img src="../assets/avatar.png" alt="Avatar" />
      <span>Enes Yıldırım</span>
    </div>
  </header>
</template>

<script>
import ExxenLogo from '@/assets/logo.svg';
import HamburgerIcon from '@/assets/icons/hamburger-menu.svg';
import SearchBox from '@/components/SearchBox';

export default {
  name: 'Header',
  components: {
    SearchBox,
    ExxenLogo,
    HamburgerIcon
  },
  data() {
    return {
      hasScrollClass: false,
      display: true
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
  display: flex;
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

.mobile-nav-icon {
  display: none;
}

@media (max-width: 768px) {
  header {
    background: #212121;
  }

  .hide-in-mobile {
    display: none;
  }

  .mobile-nav-icon {
    display: block;
    fill: #fff;
  }

  .logo {
    flex: 1;
  }

  nav {
    transition: opacity 500ms ease-out;
    opacity: 0;
    visibility: hidden;
  }

  nav.active {
    opacity: 1;
    visibility: visible;
  }

  nav {
    position: fixed;
    width: 65%;
    height: 100%;
    top: 60px;
    left: 0;
    flex-direction: column;
    background-color: #212121;
  }

  nav > a {
    width: 100%;
    justify-content: flex-start;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid #111;
  }
}

@media (min-width: 768px) {
  nav > .router-link-active {
    color: #feca07;
    border-top: 2px solid #feca07;
  }
}
</style>
