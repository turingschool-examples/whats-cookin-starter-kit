//IMPORTS 
import { getRandomUser } from "./users";
import { pageLoadRenders } from "./domUpdates";
import { copyItem } from "./helper-functions";
import { populateTags, calculateRecipeCost, getIngredientAmounts, getInstructions } from './recipes';

// DATA MODEL 
let currentUser;
let pageData = {
  currentView: 'our-recipes',
  currentRecipeCard: {},
  allTags: []
};

const getRecipeCard = (recipe) => {
    const recipeCard =  {
      id: recipe.id,
      instructions: getInstructions(recipe),
      ingredients: getIngredientAmounts(recipe, pageData.allIngredients),
      image: recipe.image,
      name: recipe.name,
      price: calculateRecipeCost(recipe, pageData.allIngredients),
      tags: recipe.tags
    }

  return recipeCard;
}

// API CALLS

const assignCurrentUser = () => {
  fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(users => {
      currentUser = getRandomUser(users.users);
    })
    .catch(error => {
      console.error(error)
    })
}

const fetchRecipes = () => {
    fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
        .then(response => response.json())
        .then(recipes => {
            pageData.allRecipes = recipes.recipes;
            pageData.recipesOfInterest = copyItem(pageData.allRecipes);
            pageData.allTags = populateTags(pageData.allRecipes);
            pageLoadRenders(pageData.recipesOfInterest);
        })
        .catch(error => {
            console.error(error);
        });
}

const fetchIngredients = () => {
  fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`)
    .then(response => response.json())
    .then(ingredientData => {pageData.allIngredients = ingredientData.ingredients})
    .catch(error => console.error(error))
}

const loadData = () => {
  assignCurrentUser();
  fetchRecipes();
  fetchIngredients();
}

const updateCurrentUser = (user) => {
  currentUser = user;
};

export { currentUser, pageData, updateCurrentUser, loadData, getRecipeCard };
