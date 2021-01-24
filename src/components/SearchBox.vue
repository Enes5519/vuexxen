<template>
  <div class="search_container">
    <input type="text" placeholder="Ara" />
    <SearchIcon />
  </div>
</template>

<script>
import SearchIcon from '@/assets/icons/search.svg';

export default {
  name: 'SearchBox',
  components: { SearchIcon }
};
</script>

<style scoped>
.search_container {
  height: 40px;
  width: 180px;
  position: relative;
}

.search_container > input {
  height: 100%;
  width: 100%;
  padding: 12px 40px;
  display: inline-block;
  border: 0;
  outline: 0;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
}

.search_container > input:focus {
  box-shadow: 0 0 5px #fff;
}

.search_container > input::placeholder {
  color: white;
  opacity: 1;
}

.search_container > svg {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 10px;
  top: 10px;
  fill: #fff;
}
</style>
