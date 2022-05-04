import { db } from ".";
import { collection, getDocs } from 'firebase/firestore/lite';


export const getAllMovies = () => {
  try {
    return getDocs(collection(db, "movies"));
    
  } catch (error) {
    return console.error("Error getting documents ", e);
  }
}
