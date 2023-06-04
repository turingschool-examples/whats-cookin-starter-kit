//IMPORTS 
import { getRandomUser } from "./users";
import {
  pageLoadRenders,
  hideSpinner,
  toggleSavedButtons,
  renderTagsAfterFetch,
  checkIfModalOpen,
  showError
 } from "./domUpdates";
import { copyItem } from "./helper-functions";
import { populateTags } from './recipes';
// import { config } from "../config.js"

// DATA MODEL 
let currentUser;
let pageData = {
  currentView: 'our-recipes',
  currentRecipeCard: {},
  allTags: []
};

// API CALLS
const getUsers = () => fetch('http://localhost:3001/api/v1/users')
const getRecipes = () => fetch('http://localhost:3001/api/v1/recipes')
const getIngredients = () => fetch(`http://localhost:3001/api/v1/ingredients`)
const updateRecipe = (userID, recipeID, request) => {
  const body = {
    userID,
    recipeID
  };

  return fetch('http://localhost:3001/api/v1/usersRecipes', {
    method: `${request}`,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
  }})
}

const getUsersAfterUpdate = (userID, recipeID, e, errorMessage) => {
  return getUsers()
          .then(response => {
            return response.json();
          })
          .then(data => {
            const foundUser = data.users.find(user => user.id === userID);
            currentUser = foundUser;
            renderTagsAfterFetch();
            toggleSavedButtons(e, recipeID, currentUser, errorMessage);
          })
          .catch(err => console.error(err))
}

const handleUserData = users => currentUser = getRandomUser(users)

const handleRecipeData = recipes => {
  pageData.allRecipes = recipes;
  pageData.recipesOfInterest = copyItem(pageData.allRecipes);
  pageData.allTags = populateTags(pageData.allRecipes);
  // getChatGPTRecipePitches(pageData.allRecipes);
  setTimeout(() => {
    hideSpinner();
    pageLoadRenders(pageData.allRecipes);
  }, 2000)
}

const handleIngredientData = ingredients => pageData.allIngredients = ingredients

const patchHits = (recipe) => {
  fetch('http://localhost:3001/api/v1/recipeHits', {
    method: 'PATCH',
    body: JSON.stringify({recipeID: recipe.id}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      return res.json()
    })
    .then((status) => {
      if (!status.message.includes("Success")) console.log(status.message)
      getRecipes()
        .then(res => res.json())
        .then(data => {
          pageData.allRecipes = data.recipes;
        })
    })
}

const loadData = () => {
  Promise.all([getUsers(), getRecipes(), getIngredients()])
    .then (responses => {
      responses.forEach(response => {
        if(response.ok) {
          response.json()
          .then (data => {
            const functions = {
              users: (users) => handleUserData(users), 
              recipes: (recipes) => handleRecipeData(recipes),
              ingredients: (ingredients) => handleIngredientData(ingredients)
            }
            const property = response.url.split('/').reverse()[0]
            functions[property](data[property])
          })
          .catch(err => console.error(err))
        } else {
          console.error(response.status)
        }
    })
  })   
}

const updateCurrentUser = (user) => {
  currentUser = user;
};

const updateServerRecipe = (userID, recipeID, e, requestType) => {
  const conditions = {
    "POST": 'added',
    "DELETE": 'removed'
  }
  updateRecipe(userID, recipeID, requestType)
  .then((res) => res.json())
  .then(status => {
    if (status.message.includes(`was ${conditions[requestType]}`)) {
      getUsersAfterUpdate(userID, recipeID, e);
    } else {
      showError(recipeID)
    }
  })
  .catch(err => {
    showError(recipeID);
    console.error(err);
  });
}

// Chat GPT Extension 

const getChatGPTRecipePitches = (allRecipes) => {
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
        Authorization: 'Bearer ' + String(config.OPENAI_API_KEY),
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

export { currentUser, pageData, updateCurrentUser, loadData, patchHits, updateServerRecipe };
