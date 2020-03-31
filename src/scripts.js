console.log('Hello world');

// const Recipe = require('./Recipe');


let allRecipesDisplay = document.querySelector('.all-recipes-display');
let recipeSection = document.querySelector('.all-recipes');
let welcomeUser = document.querySelector('.welcome');
let tagsMenu = document.querySelector('.tags-menu');
// let pageTitleButton = document.getElementById('page-title');
var recipeScreenCount = 0;
var closeButton;
let displayedRecipes = [];
let user;
let recipeToAdd;


window.onload = function() {
  addRecipesToDOM();
  generateAndGreetRandomUser();
}

recipeSection.addEventListener('click', clickHandler);
tagsMenu.addEventListener('change', filterRecipesByTag);
// pageTitleButton.addEventListener('click', addRecipesToDOM);
// console.log(tagsMenu);
//   removeRecipeDisplay();
// );


var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function clickHandler() {
  let retrievedRecipe;
  if (recipeScreenCount < 1) {
  if (event.target.classList.contains('card-image')) {
      recipeData.forEach((recipe) => {
        if (recipe.id == event.target.id) {
          retrievedRecipe = recipe;
          retrievedRecipe = new Recipe(retrievedRecipe.id, retrievedRecipe.image, retrievedRecipe.ingredients, retrievedRecipe.instructions, retrievedRecipe.name, retrievedRecipe.tags)
      }
    });
    displayRecipe(retrievedRecipe);
    recipeScreenCount++;
  }
}

  if (event.target.classList.contains('close-button')) {
    event.target.parentNode.remove()
    recipeScreenCount--
  }

  if (event.target.classList.contains('favorite')) {
    let favoriteRecipeID = event.target.closest('.recipe-card').id;
    console.log(favoriteRecipeID);
    // console.log(user);
    recipeData.forEach((recipe) => {
      console.log(recipe.id)
      if (recipe.id == favoriteRecipeID) {
        recipeToAdd = recipe;
      }
    });
    console.log(recipeToAdd);
    // console.log(favoriteRecipeID);
    }
    // console.log(recipeToAdd);
    // addRemoveFavorite(recipeToAdd, user)
    // console.log(user.favoriteRecipes);
 }


function addRecipesToDOM() {
  allRecipesDisplay.innerHTML = '';
  recipeData.forEach((recipe) => {
    recipe = new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
    displayedRecipes.push(recipe);
    allRecipesDisplay.innerHTML+=
    `<div id=${recipe.id} class='recipe-card'>
      <div class='recipe-card-header'>
        <p>${recipe.name}</p>
        <div class="card-btns">
          <button class='favorite'>F
          </button>
          <button class='cook-next'>C
          </button>
        </div>
      </div>
      <div class="recipe-img">
        <img id=${recipe.id} class="card-image"src="${recipe.image}" alt="">
      </div>
      <footer></footer>
    </div>`
    })
  };

  function generateAndGreetRandomUser() {
    let randomIndex = Math.floor(Math.random() * 50)
    let newUser = usersData[randomIndex]
    user = new User(newUser.name, newUser.id, newUser.pantry);
    welcomeUser.innerText = `Welcome ${newUser.name}`
  }


  function displayRecipe(recipe) {
    recipeSection.insertAdjacentHTML('afterbegin',
    `<div class="display-recipe"><button class="close-button" type="button" name="button">Close
    </button><h2>${recipe.name}</h2><h1>COST:${recipe.getIngredientsCost(recipe)}</h1>
    <h1>(${recipe.tags})</h1><img class="card-image"src="${recipe.image}" alt="">
    <p>${getRecipeInstructions(recipe)}</p></div>`)
  }

  function getRecipeInstructions(recipe) {
    let instructions = [];
    recipe.instructions.forEach((instruction) => {
      let parsedInstruction = Object.values(instruction)
      instructions.push(parsedInstruction);
    })
    return instructions
}

  function filterRecipesByTag() {
    allRecipesDisplay.innerHTML = '';
    let filteredRecipes = [];
    let tagName = event.target.value;
    displayedRecipes.filter((recipe) => {
      if (recipe.tags.includes(tagName)) {
        filteredRecipes.push(recipe);
      }
    });

    filteredRecipes.forEach((recipe) => {
      allRecipesDisplay.innerHTML+=
      `<div id=${recipe.id} class='recipe-card'>
        <div class='recipe-card-header'>
          <p>${recipe.name}</p>
          <div class="card-btns">
            <button class='favorite'>F
            </button>
            <button class='cook-next'>C
            </button>
          </div>
        </div>
        <div class="recipe-img">
          <img id=${recipe.id} class="card-image"src="${recipe.image}" alt="">
        </div>
        <footer></footer>
      </div>`
    });
  }

  let favIcon = document.querySelector('favorite');
  // let cookNextIcon = document.getElementsByClassName('.cook-next');
  let myRecipesDisplay = document.getElementById('my-recipes-display');
  // console.log('fav', favIcon)
  // favIcon.addEventListener('click', addRemoveFavorite);

  function addRemoveFavorite(recipe, user) {
    // console.log(user)
    if (recipe.isFavorite) {
      user.removeFavoriteRecipe()
    } else {
      user.addFavoriteRecipe()
    }
    // displayMyRecipes()
  }

  function displayMyRecipes(user) {
    user.favoriteRecipes.forEach(recipe => {
      recipe = new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
      myRecipesDisplay.innerHTML +=
      `<div id=${recipe.id}class='recipe-card'>
      <div class='recipe-card-header'>
      <p>${recipe.name}</p>
      <div class="card-btns">
      <button class="favorite">
      F
      </button>
      <button class="cook-next">
      C
      </button>
      </div>
      </div>
      <div class="recipe-img">
      <img id=${recipe.id} class="card-image" src="${recipe.image}" alt="">
      </div>
      <footer></footer>
      </div>`
    })
}

  /*

  function filterRecipesByType() {
    takes an argument of type;
    loops through all recipes, returns an array of only the recipes
    that match.
    clears current recipe section;
    pulls the recipe info out.
    recreates the cards.
}

  function addToFavorites() {
    on click
    takes recipe adds it to user davorite recipes array.
    then displays the title in the favorite recipe section.
    the title is a link to the whole recipe.
    if it is already favorited; it will not show up again.
    leaves a visual indication on the card that it is favorited.
    if clicked a second time visual indication goes away
}

*/

  //  filterRecipes(/*type or input.value*/) {
  //   //should be able to filter recipes by type
  //   //we should have buttons that correspond to
  //   //the types of recipes
  // }

  // searchAllSavedRecipes(/*input.value*/) {
  //   //wherever we put the search input the input
  //   //value will become an argument, that will make this
  //   //method, search for the name in the saved recipe array
  // }







  // recipeData.forEach(recipe => {
  //   console.log(recipe);
  // })
  //loop through recipes, instantiate each recipe; create a card
  //forEach recipe.
  //
// }


  //  DOM
