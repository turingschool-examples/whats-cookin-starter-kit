import './styles.css';
import fetchAll from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import Recipe from './classes/recipe';
import User from './classes/user';
import RecipeRepository from './classes/RecipeRepository';
import './images/turing-logo.png'


let userData;
let ingredientsData;
let recipeRolodex;


const recipeContainer = document.querySelector('.recipe-container');
const miniCardSection = document.getElementById('miniCardSection');
const miniCardList = document.getElementById('miniCardList');
const defaultView = document.getElementById('mainScreen');
const overlay = document.querySelector('.overlay');

const buttonHome = document.getElementById('homeButton');
const buttonViewAll = document.getElementById('viewAllButton');
const buttonSavedRecipes = document.getElementById('savedRecipesButton');
const buttonSearch = document.getElementById('searchBtn');

const searchBar = document.getElementById('search-bar');

// buttonSearch.addEventListener('click', searchForRecipe)

// fetchAll()
//   .then(data => {
//   console.log(data)
//   viewHomePage(data)
// })

// const searchForRecipe = () => {
//     let input = searchBar.value
//     RecipeRepository.getRecipeByTag(input)
//     RecipeRepository.getRecipeByName(input)
// }


window.addEventListener('load', () => {
    fetchAll()
    .then(data => {
        //   console.log(data)
    // userData = allApis[0] 
    // ingredientsData = allApis[1]
    recipeRolodex = new RecipeRepository(data[2])
    // console.log(recipeRolodex)
    viewHomePage()
    })
    
});


const searchForRecipe = () => {
    let input = searchBar.value
    if(recipeRolodex.getRecipeByTag(input).length > 0) {
      //  display the stored recipes with a helper function
    } 
    else if(recipeRolodex.getRecipeByName(input).length > 0){
            //  display the stored recipe with a helper function
      } else { 
          // display "eh... nothin here... sorryyyyyyyy"
  }
}

const show = (element) => {
  element.classList.remove('hidden');
};
const hide = (element) => {
  element.classList.add('hidden');
};

const viewHomePage = () => {
    
//   let recipeData = data[2].recipeData;
  console.log(recipeRolodex) 
  let recipeHTML = recipeRolodex.recipes.recipeData.map(recipe => `
    <article class="recipe">
      <h2 class="recipe-title">${recipe.name}</h2>
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
    </article>
  `).join('');
  recipeContainer.innerHTML = recipeHTML;
  //map method iterates over each recipe in the recipeData array and maps each one to an HTML string.
  // The join method is then used to concatenate all of the HTML strings into one string - then added to the inner html of the 'recipe container'
  //join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
  // this will allow multiple articles to be added to the recipe container.(new image / new name)
}

function viewRecipesByTag() {
  let tagHTML = recipeRolodex.recipes.recipeData.tag
}

// fetchAll()
//   .then(data => {
//   console.log(data)
//   viewHomePage(data)
// })





/*
As a user, I should be able to view a list of all recipes.
As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)
*/