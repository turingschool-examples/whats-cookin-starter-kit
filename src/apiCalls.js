//IMPORTS 
import { getRandomUser } from "./users";
import { pageLoadRenders, hideSpinner } from "./domUpdates";
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
        })
        .then(() => {
          pageData.recipesOfInterest = copyItem(pageData.allRecipes);
          pageData.allTags = populateTags(pageData.allRecipes);
          // getChatGPTRecipePitches(pageData.allRecipes);
        })
        .then(() => {
          setTimeout(() => {
            hideSpinner();
            pageLoadRenders(pageData.allRecipes);
          }, 2000)
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

const getChatGPTRecipePitches = (allRecipes) => {
  const openai_api_key = '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';
  const DEFAULT_PARAMS = {
    "model": "text-davinci-002",
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
        Authorization: 'Bearer ' + String(openai_api_key),
        organization: 'org-47g2m7vnC6yUKCbIL0f7PSFb'
    },
  };

  allRecipes.forEach((recipe) => {
    DEFAULT_PARAMS["prompt"] = `In 10 words or less, give me an enticing pitch based on this recipe name: ${recipe.name}`;
    requestOptions.body = JSON.stringify(DEFAULT_PARAMS);

    fetch('https://api.openai.com/v1/completions', requestOptions)
        .then(response => response.json())
        .then(data => recipe.pitch = data.choices[0].text)
        .catch(error => console.error(error));
  });
}

export { currentUser, pageData, updateCurrentUser, loadData, getRecipeCard };
