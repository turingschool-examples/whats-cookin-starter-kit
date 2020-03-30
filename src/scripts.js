console.log('Hello world');

// const Recipe = require('./Recipe');


let allRecipesDisplay = document.querySelector('.all-recipes-display');
let recipeNames = [];


window.onload = function() {
  addRecipesToDOM();
  generateRandomUser();
}


recipeSection.addEventListener('click', addRecipesToDOM);

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

  function generateRandomUser() {
    let randomIndex = Math.floor(Math.random() * 50)
    let newUser = usersData[randomIndex]
    let user = new User(newUser.name, newUser.id, newUser.pantry);
    console.log(user);
  }

    // sortedRecipeNames.sort(function(a, b) {
    //   return a.name - b.name
    // });





  // recipeData.forEach(recipe => {
  //   console.log(recipe);
  // })
  //loop through recipes, instantiate each recipe; create a card
  //forEach recipe.
  //
// }

function generateUser() {
  //on Load
  //from user usersData
  //random index
  //use let user hold the value
}

function greetUser() {
  //takes current user
  //uses current user name at top of page
  //let user
}

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
