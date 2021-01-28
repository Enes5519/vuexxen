<template>
  <carousel
    :per-page="1"
    :navigation-enabled="true"
    :touchDrag="false"
    :mouse-drag="false"
    :scroll-per-page="false"
    :pagination-size="25"
    pagination-color="rgba(0,0,0,.6)"
    pagination-active-color="#fff"
    navigation-next-label=">"
    navigation-prev-label="<"
  >
    <slide v-for="slide in headerMovies" v-bind:key="slide.name">
      <div class="backdrop" :style="getImageStyle(slide.backdrop_path)">
        <h1>{{ slide.name }}</h1>
        <div class="actions">
          <button type="button">
            Hemen İzle
          </button>
          <button type="button">Listeme Ekle</button>
        </div>
      </div>
    </slide>
  </carousel>
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
  },
  methods: {
    getImageStyle(path) {
      return {
        backgroundImage: `url('${createImageLink(path)}')`
      };
    }
  }
};
</script>

<style scoped>
.backdrop {
  height: 45vw;
  width: 100%;
  background-size: cover;
  box-shadow: inset 0 -50px 30px -10px #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3cm;
}

.backdrop > h1 {
  margin-top: 4.5cm;
  font-size: 3.5rem;
  text-shadow: 3px 3px 10px #000;
}

.backdrop > .actions {
  margin-top: 2rem;
}

.backdrop > .actions > button {
  padding: 10px 30px;
  font-weight: 700;
  font-size: 25px;
  border: none;
  box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.backdrop > .actions > button:first-of-type {
  background-color: #feca07;
}

.backdrop > .actions > button:last-of-type {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  margin-left: 15px;
}
</style>
