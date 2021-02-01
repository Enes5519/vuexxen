<template>
  <div class="movies-row">
    <div class="title">{{ title }}</div>
    <carousel
      class="movies"
      :per-page="4"
      :touchDrag="false"
      :mouse-drag="false"
      :scroll-per-page="true"
      :pagination-enabled="false"
      :navigation-enabled="true"
      navigation-next-label="＞"
      navigation-prev-label="＜"
      :space-padding="45"
      :spacePaddingMaxOffsetFactor="-10"
    >
      <slide class="movie" v-for="mov in movies" v-bind:key="mov.name">
        <img
          :src="createImageLink(mov.backdrop_path)"
          :alt="mov.name + ' backdrop image'"
        />
        <div class="movie-info">
          <div class="movie-title">
            {{ mov.name }}
          </div>
          <div class="movie-actions">
            <div class="play-button">
              <div><play-icon /></div>
              <span>Hemen İzle</span>
            </div>
            <div class="actions">
              <button role="button"><add-icon style="fill: #feca07;" /></button>
              <button role="button">
                <thumbs-up-icon style="stroke: #feca07;" />
              </button>
              <button role="button">
                <thumbs-down-icon style="stroke: #feca07;" />
              </button>
            </div>
          </div>
          <p class="movie-overview">{{ mov.overview }}</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import fetchMovies, { createImageLink } from '@/utils/tmdb';
import PlayIcon from '@/assets/icons/play.svg';
import AddIcon from '@/assets/icons/add.svg';
import ThumbsDownIcon from '@/assets/icons/thumbs_down.svg';
import ThumbsUpIcon from '@/assets/icons/thumbs_up.svg';

export default {
  name: 'MoviesRow',
  components: { PlayIcon, AddIcon, ThumbsDownIcon, ThumbsUpIcon },
  data() {
    return {
      movies: []
    };
  },
  props: {
    path: {
      type: String,
      required: true
    },
    slice: {
      type: Number,
      default: 10
    },
    title: {
      type: String,
      required: true
    }
  },
  async created() {
    const response = await fetchMovies(this.path);
    if (response.ok) {
      const result = await response.json();
      this.movies = result.results.filter(r => r.backdrop_path).slice(0, 10);
    }
  },
  methods: {
    createImageLink
  }
};
</script>

<style scoped>
.movies-row {
  margin-top: 32px;
}

.title {
  font-size: 24px;
  padding-left: 2cm;
  font-weight: 700;
}

.movies {
  padding: 20px 2cm;
}

.movie {
  height: 250px;
  margin-right: 20px;
  position: relative;
}

.movie:hover > .movie-info {
  display: block;
}

.movie > img {
  height: 200px;
  vertical-align: middle;
}

.movie-info {
  display: none;
  width: inherit;
  cursor: default;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  color: #fff;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.95) 18%,
    rgba(0, 0, 0, 0.9) 48%,
    rgba(0, 0, 0, 0.85) 67%,
    rgba(0, 0, 0, 0.8) 79%,
    rgba(0, 0, 0, 0) 100%
  );
}

.movie-title {
  color: #feca07;
  font-size: 25px;
  font-weight: bolder;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.movie-actions {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.play-button {
  cursor: pointer;
  display: flex;
  height: 100%;
  align-items: stretch;
  justify-content: space-between;
  border: 2px solid #feca07;
}
.play-button > div {
  display: flex;
  align-items: center;
  background-color: #feca07;
  padding: 0 8px;
}
.play-button > div > svg {
  height: 15px;
  width: 15px;
  fill: #000;
}
.play-button > span {
  font-size: 14px;
  margin: 5px 15px;
  font-weight: 600;
  color: #feca07;
}

.actions > button {
  cursor: pointer;
  background-color: #212121;
  border: none;
  padding: 4px 10px 0;
  margin-left: 0.2rem;
}

.actions > button > svg {
  height: 20px;
  width: 15px;
}

.movie-overview {
  line-height: 1rem;
  margin-top: 0.5rem;
  font-size: 12px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
