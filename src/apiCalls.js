//IMPORTS 
import { getRandomUser } from "./users"
import { pageLoadRenders } from "./domUpdates"
import { copyItem } from "./helper-functions"
import { calculateRecipeCost, getIngredientAmounts, getInstructions } from './recipes';

// DATA MODEL 
let currentUser;
let pageData = {
  activeTags: [],
  currentView: 'our-recipes',
  currentRecipeCard: {}
};

const getRecipeCard = (recipe) => {
    const recipeCard =  {
      id: recipe.id,
      instructions: getInstructions(recipe),
      ingredients: getIngredientAmounts(recipe, pageData.allIngredients),
      image: recipe.image,
      name: recipe.name,
      price: calculateRecipeCost(recipe, pageData.allIngredients)
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

const getChatGPTRes = () => {
    const openai_api_key = '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'
    const DEFAULT_PARAMS = {
        "model": "text-davinci-002",
        "prompt": "say this is a test",
        "temperature": 0.7,
        "max_tokens": 256,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(openai_api_key)
        },
        body: JSON.stringify(DEFAULT_PARAMS)
    };

    fetch('https://api.openai.com/v1/completions', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

export { currentUser, pageData, updateCurrentUser, loadData, getRecipeCard, getChatGPTRes };
