console.log('Hello world');

// const Recipe = require('./Recipe');


let allRecipesDisplay = document.querySelector('.all-recipes-display');
let recipeSection = document.querySelector('.all-recipes');
let welcomeUser = document.querySelector('.welcome');
var closeButton;
let recipeNames = [];


window.onload = function() {
  addRecipesToDOM();
  generateAndGreetRandomUser();
}

recipeSection.addEventListener('click', selectRecipe);
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

function addRecipesToDOM() {
  recipeData.forEach((recipe) => {
    recipe = new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
    allRecipesDisplay.innerHTML+= 
    `<div class='recipe-card'>
      <div class='recipe-card-header'>
        <p>${recipe.name}</p>
        <div class="card-btns">
          <button id='favorite'>
          </button>
          <button id='cook-next'>
          </button>
        </div>
      </div>  
      <div class="recipe-img">
        <img class="card-image"src="${recipe.image}" alt="">
      </div>
      <footer></footer>
    </div>`
    })
  };

  function generateAndGreetRandomUser() {
    let randomIndex = Math.floor(Math.random() * 50)
    let newUser = usersData[randomIndex]
    let user = new User(newUser.name, newUser.id, newUser.pantry);
    welcomeUser.innerText = `Welcome ${newUser.name}`
  }

  function selectRecipe() {
    let cardID;
    let retrievedRecipe;
      if (event.target.classList.contains('recipe-card')) {
          cardID = event.target.id
          recipeData.forEach((recipe) => {
            if (recipe.id == cardID) {
              retrievedRecipe = recipe;
        }
      });
    }
    displayRecipe(retrievedRecipe)
  }

  function displayRecipe(recipe) {
    recipeSection.insertAdjacentHTML('afterbegin',
    `<div class="display-recipe"><button class="close-button" type="button" name="button">Close
    </button><h1>${recipe.name}</h1><img class="card-image"src="${recipe.image}" alt="">
    </div>`)
    closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', removeRecipeDisplay);
  }

  function removeRecipeDisplay() {
    if (event.target.classList.contains('close-button')) {
      event.target.parentNode.remove()
    }
  }






  // recipeData.forEach(recipe => {
  //   console.log(recipe);
  // })
  //loop through recipes, instantiate each recipe; create a card
  //forEach recipe.
  //
// }


  //  DOM
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
