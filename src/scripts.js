console.log('Hello world');

// const Recipe = require('./Recipe');


let recipeSection = document.querySelector('.all-recipes');
let recipeNames = [];


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
    recipeSection.insertAdjacentHTML('afterbegin',
    `<div class='recipe-card'><h1>${recipe.name}</h1>
    <div><img class="card-image"src="${recipe.image}" alt=""></div>
    <footer></footer></div>`)

    })



    // let sortedRecipeNames = recipeNames.sort((a, b) => a.name - b.name);
    // console.log(sortedRecipeNames)

    }

    function alphabeticalOrder(arr) {
      return arr.sort();
        return a.name - b.name;
  };

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
