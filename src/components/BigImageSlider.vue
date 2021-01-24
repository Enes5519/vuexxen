<template>
  <div class="backdrop">
    <img :src="createImageLink(headerMovies[current].backdrop_path)" alt="" />
    <div class="text-on-image">
      <h1>{{ headerMovies[current].name }}</h1>
      <div class="actions">
        <button type="button">Hemen İzle</button>
        <button type="button">Listeme Ekle</button>
      </div>
    </div>
  </div>
</template>

<script>
import fetchMovies, { createImageLink, MOVIES_PATH } from '@/utils/tmdb';

export default {
  name: 'BigImageSlider',
  data() {
    return {
      headerMovies: [],
      current: 0
    };
  },
  async created() {
    const response = await fetchMovies(MOVIES_PATH); // 7
    if (response.ok) {
      const result = await response.json();
      this.headerMovies = result.results.slice(0, 7);
    }

    this.intervalId = setInterval(() => {
      if (++this.current >= 7) {
        this.current = 0;
      }
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    createImageLink: createImageLink
  }
};
</script>

<style scoped>
.backdrop {
  height: 45vw;
  width: 100%;
  position: relative;
}

.backdrop:after {
  box-shadow: inset 0 -50px 30px -10px #111;
  bottom: 0;
  content: '';
  display: block;
  left: 0;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.backdrop > img {
  height: 100%;
  width: 100%;
  object-fit: fill;
}

.backdrop > .text-on-image {
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 5%;
  text-shadow: 3px 3px 10px #000;
}

.backdrop > .text-on-image > .actions > button {
  padding: 10px 20px;
  font-weight: 700;
  font-size: 19px;
  border: 0;
  margin-top: 15px;
  margin-right: 15px;
  box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.5);
}

.backdrop > .text-on-image > .actions > button:first-of-type {
  background-color: #feca07;
}

.backdrop > .text-on-image > .actions > button:last-of-type {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
</style>
