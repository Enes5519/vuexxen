<template>
  <div class="home">
    <BigImageSlider />
    <MoviesRow :path="POPULAR_MOVIES_PATH" title="Öne Çıkanlar" />
    <MoviesRow :path="REALITY_MOVIES_PATH" title="Reality" />
    <MoviesRow :path="COMEDY_MOVIES_PATH" title="Komediler" />
  </div>
</template>

<script>
import BigImageSlider from '@/components/BigImageSlider';
import MoviesRow from '@/components/MoviesRow';
import {
  REALITY_MOVIES_PATH,
  POPULAR_MOVIES_PATH,
  COMEDY_MOVIES_PATH
} from '@/utils/tmdb';

export default {
  name: 'Home',
  components: { MoviesRow, BigImageSlider },
  created() {
    this.POPULAR_MOVIES_PATH = POPULAR_MOVIES_PATH;
    this.REALITY_MOVIES_PATH = REALITY_MOVIES_PATH;
    this.COMEDY_MOVIES_PATH = COMEDY_MOVIES_PATH;
  }
};
</script>
