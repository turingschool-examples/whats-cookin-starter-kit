import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import Recipe from './classes/Recipe';
import RecipeRepository from './classes/RecipeRepository';
import Ingredient from './classes/Ingredient';
import ingredientsData from './data/ingredients';


let recipe1 = {
    "id": 595736,
    "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
      {
        "id": 18372,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 0.5,
          "unit": "c"
        }
      },
      {
        "id": 19206,
        "quantity": {
          "amount": 3,
          "unit": "Tbsp"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 0.5,
          "unit": "c"
        }
      },
      {
        "id": 2047,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 1012047,
        "quantity": {
          "amount": 24,
          "unit": "servings"
        }
      },
      {
        "id": 10019903,
        "quantity": {
          "amount": 2,
          "unit": "c"
        }
      },
      {
        "id": 1145,
        "quantity": {
          "amount": 0.5,
          "unit": "c"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      },
      {
        "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        "number": 3
      },
      {
        "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
        "number": 4
      },
      {
        "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
        "number": 5
      },
      {
        "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
        "number": 6
      }
    ],
    "name": "Loaded Chocolate Chip Pudding Cookie Cups",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
}
let recipe2 = {
  "id": 678353,
  "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
  "ingredients": [
    {
      "id": 1009016,
      "quantity": {
        "amount": 1.5,
        "unit": "cups"
      }
    },
    {
      "id": 9003,
      "quantity": {
        "amount": 2,
        "unit": ""
      }
    },
    {
      "id": 20027,
      "quantity": {
        "amount": 1,
        "unit": "tablespoon"
      }
    },
    {
      "id": 1002046,
      "quantity": {
        "amount": 1,
        "unit": "tablespoon"
      }
    },
    {
      "id": 11215,
      "quantity": {
        "amount": 1,
        "unit": "clove"
      }
    },
    {
      "id": 1012046,
      "quantity": {
        "amount": 1,
        "unit": "tablespoon"
      }
    },
    {
      "id": 19911,
      "quantity": {
        "amount": 0.25,
        "unit": "cup"
      }
    },
    {
      "id": 16112,
      "quantity": {
        "amount": 1,
        "unit": "tablespoon"
      }
    },
    {
      "id": 10010062,
      "quantity": {
        "amount": 24,
        "unit": "ounce"
      }
    },
    {
      "id": 1102047,
      "quantity": {
        "amount": 4,
        "unit": "servings"
      }
    },
    {
      "id": 16124,
      "quantity": {
        "amount": 1,
        "unit": "tablespoon"
      }
    },
    {
      "id": 1016168,
      "quantity": {
        "amount": 1,
        "unit": "tablespoon"
      }
    }
  ],
  "instructions": [
    {
      "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
      "number": 1
    }
  ],
  "name": "Maple Dijon Apple Cider Grilled Pork Chops",
  "tags": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ]
}
let ingredient1 = {
  "id": 20081,
  "name": "wheat flour",
  "estimatedCostInCents": 142
}
let ingredient2 = {
  "id": 18372,
  "name": "bicarbonate of soda",
  "estimatedCostInCents": 582
}
let ingredient3 = {
  "id": 1123,
  "name": "eggs",
  "estimatedCostInCents": 472
}
let ingredient4 = {
  "id": 19335,
  "name": "sucrose",
  "estimatedCostInCents": 902
}

let allIngredients = ingredientsData
let allRecipes = [recipe1, recipe2]
let recipeRepository = new RecipeRepository(allRecipes)
let newRecipe = new Recipe(recipe1)
let newIngredient = new Ingredient(ingredient1)

let allRecipesButton = document.querySelector(".all-recipes-button");
let allRecipesPage = document.querySelector(".all-recipes-page");
let homePage = document.querySelector(".home-page");
let currentRecipePage = document.querySelector(".current-recipe")

//let currentUser;
//keep me
//window.addEventListener("load", selectRandomUser)
allRecipesButton.addEventListener("click", viewAllRecipes)

// function selectRandomUser() {
//   let randomIndex = Math.floor(Math.random() * userRepo.userCatalog.length)
//   let randomUser = userRepo.userCatalog[randomIndex]
//   currenUser = new User(randomUser)
//   console.log(currentUser)
// }

function viewAllRecipes() {
    addHidden(homePage)
    removeHidden(allRecipesPage)
    recipeRepository.newRecipes.forEach((recipe) => {
      const newSection = document.createElement('section')
      newSection.className = 'recipe-card-container'
      newSection.innerHTML = `
        <img class="image" id="${recipe.id}" src="${recipe.image}">
        <p class="recipe-name"> ${recipe.name} </p>`

      allRecipesPage.appendChild(newSection)
      newSection.addEventListener('click', seeRecipe)
   });
};

//click on image, grab the recipe and display the whole recipe
//section in html called current recipe
//render recipe will allow a recipe to be displayed in innerHTML of current-recipe
function seeRecipe(event) {
  let visibleRecipe = recipeRepository.newRecipes.find(recipe => {
    return parseInt(event.target.id) === recipe.id
  });
  let fullRecipe = new Recipe(visibleRecipe);
  // let totalCost = recipeInstructions.getCost()
  console.log(fullRecipe.instructions);
  console.log(allIngredients)
  renderRecipe(fullRecipe);
};

function renderRecipe(recipe) {
  addHidden(allRecipesPage)
  removeHidden(currentRecipePage)
  recipe.retrieveIngredients(allIngredients)

  const newSection = document.createElement('section')
    newSection.className = 'recipe-details'
    newSection.innerHTML = `
      <img class="image" src="${recipe.image}">
      <ul>`
    newSection.innerHTML = `<li> ${recipe.instructions} </li>`
    newSection.innerHTML = `<li> ${recipe.ingredients} </li>`
    newSection.innerHTML = `<li> ${recipe.getCost()} </li>
      </ul>`

    allRecipesPage.appendChild(newSection)
    newSection.addEventListener('click', seeRecipe)
}

function addHidden(element) {
    element.classList.add("hidden")
};

function removeHidden(element) {
    element.classList.remove("hidden")
};
