//  IMPORTS LIVE HERE
import './styles.css';
import apiCalls from './apiCalls';
import './images/turing-logo.png';
import './images/cooking.png';
import RecipeRepository from './classes/RecipeRepository';
import recipeData from './data/recipes';
import User from './classes/User';


//  QUERYSELECTORS LIVE HERE
const userWelcome = document.getElementById('section--user-welcome');
const homeButton = document.getElementById('button--home');
const myRecipesButton = document.getElementById('button--my-recipes');
const saveRecipeButton = document.getElementById('button--save-recipe');
const removeRecipeButton = document.getElementById('button--remove-recipe');
const allRecipesButton = document.getElementById('button--all-recipes');
const myRecipeList = document.getElementById('button--recipe-list');
const searchField = document.getElementById('input--search');
const filterField = document.getElementById('input--filter');
const searchFieldSaved = document.getElementById('input--search-saved-recipes');
const filterFieldSaved = document.getElementById('input--filter-saved-recipes');
const cardsContainer = document.getElementById('section--cards-container');
const recipeContainer = document.getElementById('section--recipe-details');
const recipeListsContainer = document.getElementById('section--recipe-lists');
const savedRecipesContainer = document.getElementById('section--saved-recipes');
const savedRecipesListsContainer = document.getElementById('section--saved-recipe-lists');
const allRecipesContainer = document.getElementById('section--all-recipes');
const ingredientContainer = document.getElementById('ul--ingredient-list');
const instructionsContainer = document.getElementById('ul--instructions');
const allRecipes0to9 = document.getElementById('list--recipes-0-9');
const allRecipes10to19 = document.getElementById('list--recipes-10-19');
const allRecipes20to29 = document.getElementById('list--recipes-20-29');
const allRecipes30to39 = document.getElementById('list--recipes-30-39');
const allRecipes40to49 = document.getElementById('list--recipes-40-49');
const savedRecipesList1 = document.getElementById('list--saved-recipes-0-9');
const savedRecipesList2 = document.getElementById('list--saved-recipes-10-19');
const savedRecipesList3 = document.getElementById('list--saved-recipes-20-29');
const allRecipesLists = [allRecipes0to9, allRecipes10to19, allRecipes20to29, allRecipes30to39, allRecipes40to49];
const savedRecipesLists = [savedRecipesList1, savedRecipesList2, savedRecipesList3];
const recipeCard1 = document.getElementById('card--recipe1');
const recipeCard2 = document.getElementById('card--recipe2');
const recipeCard3 = document.getElementById('card--recipe3');
const recipeCard4 = document.getElementById('card--recipe4');
const recipeCard5 = document.getElementById('card--recipe5');
const recipeCard6 = document.getElementById('card--recipe6');
const recipeCard7 = document.getElementById('card--recipe7');
const recipeCard8 = document.getElementById('card--recipe8');
const recipeCard9 = document.getElementById('card--recipe9');
const recipeCard10 = document.getElementById('card--recipe10');
const recipeTitle = document.getElementById('title--recipe');
const totalCost = document.getElementById('text--total-cost');


//  EVENT LISTENERS LIVE HERE
homeButton.addEventListener('click', () => {
    show(cardsContainer);
    hide(recipeContainer);
    hide(savedRecipesContainer);
    hide(allRecipesContainer);
    show(allRecipesButton);
    show(myRecipesButton)
});

myRecipesButton.addEventListener('click', () => {
    hide(cardsContainer);
    hide(recipeContainer);
    show(savedRecipesContainer);
    hide(allRecipesContainer);
    show(allRecipesButton);
    hide(myRecipesButton)
    displaySavedRecipes();
});

cardsContainer.addEventListener('click', (event) => {
    if (!event.target.classList.contains('glide__arrow')) {
        hide(cardsContainer);
        show(recipeContainer);
        hide(savedRecipesContainer);
        hide(allRecipesContainer);
        show(myRecipesButton)
        displayRecipeDetails(event);
    }
});

allRecipesButton.addEventListener('click', () => {
    hide(cardsContainer);
    hide(recipeContainer);
    hide(savedRecipesContainer);
    show(allRecipesContainer);
    hide(allRecipesButton);
    show(myRecipesButton)
    displayAllRecipes();
});

recipeListsContainer.addEventListener('click', (event) => {
    hide(allRecipesContainer);
    show(allRecipesButton);
    show(myRecipesButton)
    displayRecipeDetails(event);
});

savedRecipesListsContainer.addEventListener('click', (event) => {
    hide(allRecipesContainer);
    show(allRecipesButton);
    displayRecipeDetails(event);
});

saveRecipeButton.addEventListener('click', () => {
    hide(cardsContainer);
    hide(recipeContainer);
    show(savedRecipesContainer);
    hide(allRecipesContainer);
    show(allRecipesButton);
    hide(myRecipesButton);
    user.addRecipeToRecipesToCook(currentRecipe);
    displaySavedRecipes();
});

removeRecipeButton.addEventListener('click', () => {
    hide(cardsContainer);
    hide(recipeContainer);
    show(savedRecipesContainer);
    hide(allRecipesContainer);
    show(allRecipesButton);
    hide(myRecipesButton);
    user.removeRecipeFromRecipesToCook(currentRecipe);
    displaySavedRecipes();
});

filterField.addEventListener('input', (event) => {
    displayFilteredRecipes(event);
});

searchField.addEventListener('input', (event) => {
    displaySearchedRecipes(event);
});

filterFieldSaved.addEventListener('input', (event) => {
    displayFilteredRecipesSaved(event);
});

searchFieldSaved.addEventListener('input', (event) => {
    displaySearchedRecipesSaved(event);
});

// GLOBAL VARIABLES LIVE HERE
const allRecipes = new RecipeRepository(recipeData);
const allRecipesClassObjects = allRecipes.returnAllRecipesObjectsArray();
let user;
var currentRecipe;
//user is declared but not assigned which allows it to be assigned during the on load 
const testUsersArray = [{
    "name": "Saige O'Kon",
    "id": 1,
    "pantry": [
        {
            "ingredient": 11297,
            "amount": 4
        },
        {
            "ingredient": 1082047,
            "amount": 10
        },
        {
            "ingredient": 20081,
            "amount": 5
        },
        {
            "ingredient": 11215,
            "amount": 5
        },
        {
            "ingredient": 2047,
            "amount": 6
        },
        {
            "ingredient": 1123,
            "amount": 8
        },
        {
            "ingredient": 11282,
            "amount": 4
        },
        {
            "ingredient": 6172,
            "amount": 2
        },
        {
            "ingredient": 2044,
            "amount": 2
        },
        {
            "ingredient": 2050,
            "amount": 4
        },
        {
            "ingredient": 1032009,
            "amount": 3
        },
        {
            "ingredient": 5114,
            "amount": 3
        },
        {
            "ingredient": 1017,
            "amount": 2
        },
        {
            "ingredient": 18371,
            "amount": 7
        },
        {
            "ingredient": 1001,
            "amount": 6
        },
        {
            "ingredient": 99223,
            "amount": 2
        },
        {
            "ingredient": 1230,
            "amount": 2
        },
        {
            "ingredient": 9152,
            "amount": 4
        },
        {
            "ingredient": 10611282,
            "amount": 2
        },
        {
            "ingredient": 93607,
            "amount": 2
        },
        {
            "ingredient": 14106,
            "amount": 4
        },
        {
            "ingredient": 1077,
            "amount": 4
        },
        {
            "ingredient": 6150,
            "amount": 2
        },
        {
            "ingredient": 1124,
            "amount": 2
        },
        {
            "ingredient": 10011693,
            "amount": 4
        },
        {
            "ingredient": 1102047,
            "amount": 2
        },
        {
            "ingredient": 19206,
            "amount": 2
        },
        {
            "ingredient": 1145,
            "amount": 4
        },
        {
            "ingredient": 1002030,
            "amount": 4
        },
        {
            "ingredient": 12061,
            "amount": 2
        },
        {
            "ingredient": 19335,
            "amount": 4
        },
        {
            "ingredient": 15152,
            "amount": 3
        },
        {
            "ingredient": 9003,
            "amount": 2
        },
        {
            "ingredient": 18372,
            "amount": 3
        },
        {
            "ingredient": 2027,
            "amount": 2
        }
    ]
},
    {
        "name": "Ephraim Goyette",
        "id": 2,
        "pantry": [
            {
                "ingredient": 6150,
                "amount": 3
            },
            {
                "ingredient": 1032009,
                "amount": 7
            },
            {
                "ingredient": 1082047,
                "amount": 8
            },
            {
                "ingredient": 1034053,
                "amount": 6
            },
            {
                "ingredient": 2050,
                "amount": 10
            },
            {
                "ingredient": 19335,
                "amount": 13
            },
            {
                "ingredient": 1145,
                "amount": 5
            },
            {
                "ingredient": 18371,
                "amount": 8
            },
            {
                "ingredient": 19336,
                "amount": 4
            },
            {
                "ingredient": 11215,
                "amount": 12
            },
            {
                "ingredient": 9152,
                "amount": 3
            },
            {
                "ingredient": 11297,
                "amount": 4
            },
            {
                "ingredient": 1123,
                "amount": 17
            },
            {
                "ingredient": 16112,
                "amount": 2
            },
            {
                "ingredient": 4053,
                "amount": 11
            },
            {
                "ingredient": 10011693,
                "amount": 4
            },
            {
                "ingredient": 5114,
                "amount": 2
            },
            {
                "ingredient": 11529,
                "amount": 5
            },
            {
                "ingredient": 1001,
                "amount": 14
            },
            {
                "ingredient": 2027,
                "amount": 6
            },
            {
                "ingredient": 1002030,
                "amount": 9
            },
            {
                "ingredient": 20081,
                "amount": 10
            },
            {
                "ingredient": 1077,
                "amount": 5
            },
            {
                "ingredient": 14106,
                "amount": 7
            },
            {
                "ingredient": 2009,
                "amount": 5
            },
            {
                "ingredient": 16124,
                "amount": 4
            },
            {
                "ingredient": 2031,
                "amount": 3
            },
            {
                "ingredient": 2025,
                "amount": 5
            },
            {
                "ingredient": 11282,
                "amount": 8
            },
            {
                "ingredient": 20027,
                "amount": 2
            },
            {
                "ingredient": 11333,
                "amount": 3
            },
            {
                "ingredient": 19177,
                "amount": 2
            },
            {
                "ingredient": 11821,
                "amount": 3
            },
            {
                "ingredient": 18372,
                "amount": 9
            },
            {
                "ingredient": 1012047,
                "amount": 2
            },
            {
                "ingredient": 11291,
                "amount": 2
            },
            {
                "ingredient": 1102047,
                "amount": 4
            },
            {
                "ingredient": 6194,
                "amount": 5
            },
            {
                "ingredient": 19296,
                "amount": 5
            },
            {
                "ingredient": 11477,
                "amount": 3
            },
            {
                "ingredient": 2047,
                "amount": 12
            },
            {
                "ingredient": 93607,
                "amount": 6
            },
            {
                "ingredient": 12061,
                "amount": 8
            },
            {
                "ingredient": 11353,
                "amount": 3
            },
            {
                "ingredient": 6615,
                "amount": 2
            },
            {
                "ingredient": 9003,
                "amount": 2
            },
            {
                "ingredient": 19911,
                "amount": 2
            },
            {
                "ingredient": 1124,
                "amount": 3
            },
            {
                "ingredient": 11165,
                "amount": 2
            },
            {
                "ingredient": 1125,
                "amount": 3
            },
            {
                "ingredient": 1089003,
                "amount": 2
            },
            {
                "ingredient": 12120,
                "amount": 2
            },
            {
                "ingredient": 10511282,
                "amount": 2
            },
            {
                "ingredient": 1019,
                "amount": 2
            },
            {
                "ingredient": 9302,
                "amount": 2
            },
            {
                "ingredient": 1011256,
                "amount": 2
            },
            {
                "ingredient": 9019,
                "amount": 4
            },
            {
                "ingredient": 11206,
                "amount": 2
            },
            {
                "ingredient": 19350,
                "amount": 2
            },
            {
                "ingredient": 9099,
                "amount": 18
            },
            {
                "ingredient": 14412,
                "amount": 3
            }
        ]
    },
    {
        "name": "Nelda Bosco",
        "id": 3,
        "pantry": [
            {
                "ingredient": 1009159,
                "amount": 3
            },
            {
                "ingredient": 19335,
                "amount": 10
            },
            {
                "ingredient": 10123,
                "amount": 4
            },
            {
                "ingredient": 1001,
                "amount": 12
            },
            {
                "ingredient": 11529,
                "amount": 5
            },
            {
                "ingredient": 1082047,
                "amount": 4
            },
            {
                "ingredient": 4582,
                "amount": 2
            },
            {
                "ingredient": 2021,
                "amount": 3
            },
            {
                "ingredient": 19336,
                "amount": 3
            },
            {
                "ingredient": 20027,
                "amount": 2
            },
            {
                "ingredient": 1123,
                "amount": 7
            },
            {
                "ingredient": 14412,
                "amount": 3
            },
            {
                "ingredient": 1011256,
                "amount": 2
            },
            {
                "ingredient": 11215,
                "amount": 10
            },
            {
                "ingredient": 6615,
                "amount": 3
            },
            {
                "ingredient": 11477,
                "amount": 2
            },
            {
                "ingredient": 10011693,
                "amount": 4
            },
            {
                "ingredient": 14106,
                "amount": 4
            },
            {
                "ingredient": 16124,
                "amount": 4
            },
            {
                "ingredient": 20081,
                "amount": 10
            },
            {
                "ingredient": 1034053,
                "amount": 2
            },
            {
                "ingredient": 11124,
                "amount": 4
            },
            {
                "ingredient": 2047,
                "amount": 8
            },
            {
                "ingredient": 1124,
                "amount": 3
            },
            {
                "ingredient": 9156,
                "amount": 4
            },
            {
                "ingredient": 2050,
                "amount": 3
            },
            {
                "ingredient": 18372,
                "amount": 3
            },
            {
                "ingredient": 6150,
                "amount": 2
            },
            {
                "ingredient": 4053,
                "amount": 10
            },
            {
                "ingredient": 1012010,
                "amount": 3
            },
            {
                "ingredient": 19296,
                "amount": 3
            },
            {
                "ingredient": 18371,
                "amount": 6
            },
            {
                "ingredient": 1145,
                "amount": 5
            },
            {
                "ingredient": 10862,
                "amount": 2
            },
            {
                "ingredient": 1019,
                "amount": 2
            },
            {
                "ingredient": 11291,
                "amount": 4
            },
            {
                "ingredient": 9152,
                "amount": 10
            },
            {
                "ingredient": 99223,
                "amount": 2
            },
            {
                "ingredient": 2009,
                "amount": 2
            },
            {
                "ingredient": 1077,
                "amount": 3
            },
            {
                "ingredient": 2049,
                "amount": 3
            },
            {
                "ingredient": 11282,
                "amount": 3
            },
            {
                "ingredient": 19334,
                "amount": 3
            },
            {
                "ingredient": 2031,
                "amount": 2
            },
            {
                "ingredient": 9302,
                "amount": 2
            },
            {
                "ingredient": 11463,
                "amount": 2
            },
            {
                "ingredient": 2025,
                "amount": 2
            },
            {
                "ingredient": 1002014,
                "amount": 2
            },
            {
                "ingredient": 2028,
                "amount": 3
            },
            {
                "ingredient": 4047,
                "amount": 2
            }
        ]}]
// HELPER FUNCTIONS LIVE HERE
const show = element => element.classList.remove('hidden');
const hide = element => element.classList.add('hidden');
function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

const clearRecipesList = (lists) => {
    lists.forEach(list => {
        list.innerHTML = '';
    });
};

const displayAllRecipes = () => {
    clearRecipesList(allRecipesLists);
    allRecipes.recipeData.sort((a, b) => {
        // ---------------- Can this be refactored????
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        };
    });
    allRecipes.recipeData.forEach((recipe, index) => {
        if (index < 10) {
            allRecipes0to9.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 20) {
            allRecipes10to19.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 30) {
            allRecipes20to29.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 40) {
            allRecipes30to39.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else {
            allRecipes40to49.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        };
    });
};


// user.recipesToCook = allRecipes.recipeData;

const displaySavedRecipes = () => {
    savedRecipesLists.forEach(list => {
        hide(list)
    });
    savedRecipesList1.innerHTML = '';
    savedRecipesList2.innerHTML = '';
    savedRecipesList3.innerHTML = '';
    // ---------------- Can this be refactored????
    user.recipesToCook.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        };
    });

    user.recipesToCook.forEach((recipe, index) => {
        if (index < 10) {
            // first hide all the boxes
            // show the boxes one at at time, based on the value of index 0-10, 10-20, 20-30.
            show(savedRecipesList1);
            savedRecipesList1.innerHTML += `<li data-id="${recipe.id}">
            ${user.recipesToCook[index].name}</li>`;
        } else if (index < 20) {
            show(savedRecipesList2);
            savedRecipesList2.innerHTML += `<li data-id="${recipe.id}">
            ${user.recipesToCook[index].name}</li>`;
        } else if (index <= 30) {
            show(savedRecipesList3);
            savedRecipesList3.innerHTML += `<li data-id="${recipe.id}">
            ${user.recipesToCook[index].name}</li>`;
        };
    });
};

const displayFilteredRecipesSaved = (event) => {
   if (!event.target.value) {
    savedRecipesLists.forEach(list => {
            show(list)
        });
        displaySavedRecipes();
        return;
    };
    const filteredRecipes = user.filterRecipesToCookByTag(event.target.value);
    savedRecipesLists.forEach(list => {
        hide(list)
    });

    clearRecipesList(savedRecipesLists);
    filteredRecipes.forEach((recipe, index) => {
        if (index < 10) {
            show(savedRecipesList1);
            savedRecipesList1.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 20) {
            show(savedRecipesList2);
            savedRecipesList2.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 30) {
            show(savedRecipesList3);
            savedRecipesList3.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        };
    });
};

const displayFilteredRecipes = (event) => {
    if (!event.target.value) {
        allRecipesLists.forEach(list => {
            show(list)
        });
        displayAllRecipes();
        return;
    }
    const filteredRecipes = allRecipes.filteredByTag(event.target.value);
    allRecipesLists.forEach(list => {
        hide(list)
    });
    clearRecipesList(allRecipesLists);
    filteredRecipes.forEach((recipe, index) => {
        if (index < 10) {
            show(allRecipes0to9);
            allRecipes0to9.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 20) {
            show(allRecipes10to19);
            allRecipes10to19.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 30) {
            show(allRecipes20to29);
            allRecipes20to29.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 40) {
            show(allRecipes30to39);
            allRecipes30to39.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else {
            show(allRecipes40to49);
            allRecipes40to49.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        };
    });
};

const displaySearchedRecipesSaved = (event) => {
    if (!event.target.value) {
        savedRecipesLists.forEach(list => {
            show(list)
        });
        displaySavedRecipes();
        return;
    }
    const filteredRecipes = user.filterRecipesToCookByName(event.target.value);
    savedRecipesLists.forEach(list => {
        hide(list)
    });
    console.log(event.target.value)
    clearRecipesList(savedRecipesLists);
    filteredRecipes.forEach((recipe, index) => {
        if (index < 10) {
            show(savedRecipesList1);
            savedRecipesList1.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 20) {
            show(savedRecipesList2);
            savedRecipesList2.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 30) {
            show(savedRecipesList3);
            savedRecipesList3.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        };
    });
};

const displaySearchedRecipes = (event) => {
    if (!event.target.value) {
        allRecipesLists.forEach(list => {
            show(list)
        });
        displayAllRecipes();
        return;
    }
    const filteredRecipes = allRecipes.filteredByName(event.target.value);
    allRecipesLists.forEach(list => {
        hide(list)
    });
    clearRecipesList(allRecipesLists);
    filteredRecipes.forEach((recipe, index) => {
        if (index < 10) {
            show(allRecipes0to9);
            allRecipes0to9.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 20) {
            show(allRecipes10to19);
            allRecipes10to19.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 30) {
            show(allRecipes20to29);
            allRecipes20to29.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 40) {
            show(allRecipes30to39);
            allRecipes30to39.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else {
            show(allRecipes40to49);
            allRecipes40to49.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        };
    });
};

const displayRecipeDetails = (event) => {
    currentRecipe = allRecipesClassObjects.find(recipe => {
        return recipe.id.toString() === event.target.getAttribute('data-id');
    });
    if (user.recipesToCook.includes(currentRecipe)) {
        show(removeRecipeButton);
        hide(saveRecipeButton);
    } else {
        show(saveRecipeButton);
        hide(removeRecipeButton);
    };
    hide(cardsContainer);
    show(recipeContainer);
    hide(savedRecipesContainer);
    hide(allRecipesContainer);
    recipeTitle.innerText = currentRecipe.name;
    instructionsContainer.innerHTML = '';
    currentRecipe.returnRecipeInstructions().map(element => instructionsContainer.innerHTML += `<li>${element}</li>`);
    ingredientContainer.innerHTML = '';
    currentRecipe.returnRecipeIngredientsInfo()
        .map(ingredientInfo => ingredientContainer.innerHTML += `<li>${ingredientInfo}</li>`);
    ingredientContainer.innerHTML += `<div class="text--total-cost">Total cost: ${currentRecipe.returnCostOfIngredients()}</div>`;
};


function displayUserName() {
    userWelcome.innerHTML = `<p>Welcome: ${user.name}!</p>`
}



//  PROMISES LIVE HERE







//  ON LOAD FUNCTIONS LIVE HERE
function loadUser() {
  let rI = randomIndex(testUsersArray)
  let result = testUsersArray[rI]
  user = new User(result)
  displayUserName()
}


window.addEventListener('load', loadUser)
