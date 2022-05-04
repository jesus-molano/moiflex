<script setup>
import { useMovies } from '@/use/useMovies.js'
import Movie from '@/components/Movie.vue';
const { movies } = useMovies();

</script>
<template>
  <Movie v-for="movie in movies" :movie="movie"/>
</template>

<style scoped>

</style>