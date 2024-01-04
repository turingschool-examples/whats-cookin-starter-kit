import './styles.css'
import './images/cookingbannerv3.png'
import { displayRecipesHome, renderRandomUser, goToRecipe } from './domUpdates';

export let recipesToCook = [];


export function getRandomIndex(data) {
  return Math.floor(Math.random() * data.length);
}

//// Fisher-Yates shuffle Algorithm ////
export function shuffledRecipes(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    array.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array;
}
