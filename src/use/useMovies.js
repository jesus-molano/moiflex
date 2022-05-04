import { ref } from 'vue';
import { getAllMovies } from '../services/firebase/dbService';

const movies = ref([]);

export function useMovies() {

  const getMovies = async () => {
    const querySnapshot = await getAllMovies();
    querySnapshot.forEach(doc => {
      movies.value.push(doc.data());
    })
  }
  return {
    movies,
    getMovies
  }
}
