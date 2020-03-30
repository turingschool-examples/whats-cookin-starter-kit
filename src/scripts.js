let recipeSection = document.querySelector('.all-recipes');
let welcomeUser = document.querySelector('.welcome');
let recipeNames = [];


window.onload = function() {
  addRecipesToDOM();
  generateAndGreetRandomUser();
}

recipeSection.addEventListener('click', selectRecipe);


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
    recipeSection.insertAdjacentHTML('afterbegin',
    `<div class='recipe-card' id=${recipe.id}><h1>${recipe.name}</h1>
    <div><img class="card-image"src="${recipe.image}" alt=""></div>
    <footer></footer></div>`)
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
              console.log(retrievedRecipe);
        }
      });
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
