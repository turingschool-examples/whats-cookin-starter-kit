//IMPORTS 
import { getRandomUser } from "./users";
import { pageLoadRenders, hideSpinner } from "./domUpdates";
import { copyItem } from "./helper-functions";
import { populateTags, calculateRecipeCost, getIngredientAmounts, getInstructions } from './recipes';
// import { config } from "../config.js"

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

// const assignCurrentUser = () => {
//   fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
//     .then(response => response.json())
//     .then(users => {
//       currentUser = getRandomUser(users.users);
//     })
//     .catch(error => {
//       console.error(error)
//     })
// }

// const fetchRecipes = () => {
//     fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
//         .then(response => response.json())
//         .then(recipes => {
//             pageData.allRecipes = recipes.recipes;
//         })
//         .then(() => {
//           pageData.recipesOfInterest = copyItem(pageData.allRecipes);
//           pageData.allTags = populateTags(pageData.allRecipes);
//           // getChatGPTRecipePitches(pageData.allRecipes);
//         })
//         .then(() => {
//           setTimeout(() => {
//             hideSpinner();
//             pageLoadRenders(pageData.allRecipes);
//           }, 2000)
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }

// const fetchIngredients = () => {
//   fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`)
//     .then(response => response.json())
//     .then(ingredientData => {pageData.allIngredients = ingredientData.ingredients})
//     .catch(error => console.error(error))
// }

// const loadData = () => {
//   assignCurrentUser();
//   fetchRecipes();
//   fetchIngredients();
// }


const fetchUsers = () => fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
const fetchRecipes = () => fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
const fetchIngredients = () => fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`)

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

const loadData = () => {
  Promise.all([fetchUsers(), fetchRecipes(), fetchIngredients()])
    .then (responses => {
      responses.forEach(response => {
        response.json()
        .then (data => {
          const functions = {
            users: (users) => handleUserData(users), 
            recipes: (recipes) => handleRecipeData(recipes),
            ingredients: (ingredients) => handleIngredientData(ingredients)
          }
          console.log('data', response.url.split('/').reverse()[0])
          functions[response.url.split('/').reverse()[0]](data[response.url.split('/').reverse()[0]])
        }
        )
    })
  })   
}

const updateCurrentUser = (user) => {
  currentUser = user;
};

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

export { currentUser, pageData, updateCurrentUser, loadData, getRecipeCard };






