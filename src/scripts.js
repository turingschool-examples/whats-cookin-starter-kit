//  IMPORTS LIVE HERE
import './styles.css';
import './images/turing-logo.png';
import './images/cooking.png';
import RecipeRepository from './classes/RecipeRepository';
import User from './classes/User';
import Pantry from './classes/Pantry';
import { fetchData, reduceIngredientsFromCooking } from './apiCalls';


//  QUERYSELECTORS LIVE HERE
const userWelcome = document.getElementById('section--user-welcome');
const homeButton = document.getElementById('button--home');
const myRecipesButton = document.getElementById('button--my-recipes');
const saveRecipeButton = document.getElementById('button--save-recipe');
const removeRecipeButton = document.getElementById('button--remove-recipe');
const allRecipesButton = document.getElementById('button--all-recipes');
const cookRecipeButton = document.getElementById('button--cook-recipe');
const ingredientForm = document.getElementById('form--ingredients');
const searchField = document.getElementById('input--search');
const filterField = document.getElementById('input--filter');
const searchFieldSaved = document.getElementById('input--search-saved-recipes');
const filterFieldSaved = document.getElementById('input--filter-saved-recipes');
const cardsContainer = document.getElementById('section--cards-container');
const recipeContainer = document.getElementById('section--recipe-details');
const recipeListsContainer = document.getElementById('section--recipe-lists');
const savedRecipesContainer = document.getElementById('section--saved-recipes');
const savedRecipesListsContainer = document.getElementById('section--saved-recipe-lists');
const addIngredientTitle = document.getElementById('title--add-ingredient');
const allRecipesTitle = document.getElementById('title--all-recipes');
const allRecipesContainer = document.getElementById('section--all-recipes');
const recipeImageContainer = document.getElementById('section--recipe-image');
const pantryTableBody = document.getElementById('table--pantry-body');
const ingredientContainer = document.getElementById('ul--ingredient-list');
const instructionsContainer = document.getElementById('ul--instructions');
const ingredientList = document.getElementById('list--ingredients');
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
const recipeTitle = document.getElementById('title--recipe');
const articleText = document.getElementById('text--article');
const neededIngredientList = document.getElementById('needed--ingredients')

// GLOBAL VARIABLES LIVE HERE
let user;
let usersArray;
let arrayForUser;
let recipeArray;
let currentRecipe;
let allRecipes;
let ingredientsArray;
let recipeRepo;
let recipeRepoClass;
let fancyPantry;

//  PROMISES LIVE HERE
function promises() {
    Promise.all([fetchData('users'), fetchData('recipes'), fetchData('ingredients')]).then(data => {
        usersArray = data[0];
        recipeArray = data[1];
        recipeRepo = recipeArray;
        ingredientsArray = data[2];
        arrayForUser = usersArray;
        recipeRepoClass = new RecipeRepository(recipeRepo);
        allRecipes = recipeRepoClass.returnAllRecipesObjectsArray()
        user = new User(arrayForUser[randomIndex(arrayForUser)]);
        fancyPantry = new Pantry(user);
        user.pantry = fancyPantry;
        loadUser();
    })
}

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
    displayPantry();
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
    displayPantry();
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

cookRecipeButton.addEventListener('click', () => {
    let missingIngredients = user.pantry.checkIngredients(currentRecipe)
    show(articleText)
    if (missingIngredients.length === 0) {
        articleText.innerText = 'Let\'s get cookin\'!'
        currentRecipe.ingredients.forEach(ingredient => {
            reduceIngredientsFromCooking(user, ingredient)
            user.pantry.pantry.forEach(userIngredient => {
                if (userIngredient.ingredient === ingredient.id) {
                    userIngredient.amount -= ingredient.quantity.amount
                }
            })
        })
    } else {
        articleText.innerText = 'First, here\'s your shopping list: '
        console.log(missingIngredients[0])
        neededIngredientList.innerHTML = `<ul>${missingIngredients}</ul>`
    }
})

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

ingredientForm.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'submit') {
        let ingredientName = event.currentTarget.elements.ingredient.value
        let addedIngredient = ingredientsArray.find(ingredient => ingredient.name === ingredientName)
        let amount = parseInt(event.currentTarget.elements.quantity.value)
        if (!addedIngredient || !amount) {
            addIngredientTitle.style.color = 'red';
            addIngredientTitle.innerText = 'Please complete all fields!'
        } else {
            fetch('http://localhost:3001/api/v1/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "userID": user.id, "ingredientID": addedIngredient.id, "ingredientModification": amount })
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Please select a valid ingredient and/or quantity.')
                    }
                    return response.json()
                })
                .then((response) => {
                    user.addIngredientToPantry(addedIngredient, amount);
                    addIngredientTitle.style.color = 'black';
                    addIngredientTitle.innerText = "Ingredient Added!!";
                    displayPantry();
                    setTimeout(() => {
                        addIngredientTitle.innerText = 'Add an ingredient!'
                    }, 2500)

                })
                .catch(error => {
                    addIngredientTitle.style.color = 'red';
                    addIngredientTitle.innerText = `${error.message}`
                })

        }
    }
})


// HELPER FUNCTIONS LIVE HERE
const show = element => element.classList.remove('hidden');
const hide = element => element.classList.add('hidden');
const randomIndex = array => Math.floor(Math.random() * array.length);

function loadUser() {
    userWelcome.innerHTML = `<p>Welcome, ${user.name}!</p>`
}

const clearRecipesList = (lists) => {
    lists.forEach(list => {
        list.innerHTML = '';
    });
};

const displayAllRecipes = () => {
    clearRecipesList(allRecipesLists);
    allRecipes.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        };
    });
    allRecipes.forEach((recipe, index) => {
        if (index < 10) {
            allRecipes0to9.innerHTML += `<li class='list-items-all' tabindex="0" data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 20) {
            allRecipes10to19.innerHTML += `<li class='list-items-all' tabindex="1" data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 30) {
            allRecipes20to29.innerHTML += `<li class='list-items-all' tabindex="2" data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 40) {
            allRecipes30to39.innerHTML += `<li class='list-items-all' tabindex='3' data-id="${recipe.id}">${recipe.name}</li>`;
        } else {
            allRecipes40to49.innerHTML += `<li class='list-items-all' tabindex='4' data-id="${recipe.id}">${recipe.name}</li>`;
        };
    });
};

const displaySavedRecipes = () => {
    savedRecipesLists.forEach(list => {
        hide(list)
    });
    savedRecipesList1.innerHTML = '';
    savedRecipesList2.innerHTML = '';
    savedRecipesList3.innerHTML = '';
    user.recipesToCook.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        };
    });

    user.recipesToCook.forEach((recipe, index) => {
        if (index < 10) {
            show(savedRecipesList1);
            savedRecipesList1.innerHTML += `<li class='list-items-all' data-id="${recipe.id}">
            ${user.recipesToCook[index].name}</li>`;
        } else if (index < 20) {
            show(savedRecipesList2);
            savedRecipesList2.innerHTML += `<li class='list-items-all' data-id="${recipe.id}">
            ${user.recipesToCook[index].name}</li>`;
        } else if (index <= 30) {
            show(savedRecipesList3);
            savedRecipesList3.innerHTML += `<li class='list-items-all' data-id="${recipe.id}">
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
        allRecipesTitle.innerText = 'All Recipes';
        allRecipesLists.forEach(list => {
            show(list)
        });
        displayAllRecipes();
        return;
    }
    const filteredRecipes = recipeRepoClass.filteredByTag(event.target.value);
    if (filteredRecipes.length === 0) {
        allRecipesTitle.innerText = 'No recipes found'
    } else {
        allRecipesTitle.innerText = 'All Recipes';
    }

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
        allRecipesTitle.innerText = 'All Recipes';
        allRecipesLists.forEach(list => {
            show(list)
        });
        displayAllRecipes();
        return;
    }

    const filteredRecipes = recipeRepoClass.filteredByName(event.target.value);
    if (filteredRecipes.length === 0) {
        allRecipesTitle.innerText = 'No recipes found.'
    } else {
        allRecipesTitle.innerText = 'All Recipes';
    }

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
    currentRecipe = allRecipes.find(recipe => {
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
    recipeImageContainer.innerHTML = '';

    recipeImageContainer.innerHTML += `<p><img src="${currentRecipe.image}" alt ${currentRecipe.name}></p>`;

    instructionsContainer.innerHTML = '';
    currentRecipe.returnRecipeInstructions(ingredientsArray).map(element => instructionsContainer.innerHTML += `<li>${element}</li>`);
    ingredientContainer.innerHTML = '';
    currentRecipe.returnRecipeIngredientsInfo(ingredientsArray)
        .map(ingredientInfo => ingredientContainer.innerHTML += `<li>${ingredientInfo}</li>`);

    ingredientContainer.innerHTML += `<div class="text--total-cost">Total cost: ${currentRecipe.returnCostOfIngredients(ingredientsArray)}</div>`;
};

const populateIngredientList = () => {
    ingredientsArray.forEach(ingredient => {
        ingredient.name = ingredient.name.toLowerCase();
    });

    ingredientsArray.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        };
    });

    ingredientsArray.forEach(ingredient => {
        ingredientList.innerHTML += `<option value="${ingredient.name}"></option>`
    });
}

const displayPantry = () => {
    populateIngredientList();
    pantryTableBody.innerHTML = '';
    let pantryContents = user.pantry.returnAllPantryContentsWithInfo(allRecipes, ingredientsArray);
    pantryContents.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        };
    });
    pantryContents.forEach(ingredient => {
        pantryTableBody.innerHTML += `<tr><td>${ingredient.name}</td><td>${ingredient.amount}</td><td>${ingredient.unit}</td></tr>`
    });
}

window.addEventListener('load', promises)
