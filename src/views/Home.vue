<template>
  <div class="home">
    <BigImageSlider />
    <MoviesRow :path="POPULAR_MOVIES_PATH" title="Popüler" />
  </div>
</template>

<script>
import BigImageSlider from '@/components/BigImageSlider';
import MoviesRow from '@/components/MoviesRow';
import { POPULAR_MOVIES_PATH } from '@/utils/tmdb';
export default {
  name: 'Home',
  components: { MoviesRow, BigImageSlider },
  created() {
    this.POPULAR_MOVIES_PATH = POPULAR_MOVIES_PATH;
  }
};
</script>
