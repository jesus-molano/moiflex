<script setup>
const props = defineProps({
  movie:{
    type:Object
  }
})
const IMG_DEFAULT="https://static.standaard.be/Assets/Images_Upload/2022/01/06/226b57ef-6542-41be-ae50-72672a89bdb7.jpg?maxheight=550&maxwidth=550&scale=both";
</script>
<template>
  <RouterLink to="/">
    <img :src="movie.posterUrl || IMG_DEFAULT" alt="">
  </RouterLink>
</template>

<style scoped>
img {
  width: 200px;
}
</style>