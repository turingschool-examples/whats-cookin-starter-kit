//NOTE: Your DOM manipulation will occur in this file
// Query Selectors:
const allRecipesButton = document.querySelector('.all-recipes');
const frontRecipeDisplay = document.querySelector('.front-recipe-display');
const allRecipeDisplay = document.querySelector('.all-recipes-display');

//Event Listeners
allRecipesButton.addEventListener('click', showRecipes);

//Event Handlers/Functions
function showRecipes() {
  addHiddenClass([frontRecipeDisplay]);
  allRecipeDisplay.innerHTML = 'recipes';
};

function removeHiddenClass(elements) {
  return elements.forEach(element => element.classList.remove('hidden'));
};

function addHiddenClass(elements) {
  return elements.forEach(element => element.classList.add('hidden'));
};

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
function exampleFunction1(person) {
  console.log(`oh hi there ${person}`)
}

function exampleFunction2(person) {
  console.log(`bye now ${person}`)
}


export {
  exampleFunction1,
  exampleFunction2,
  showRecipes,
  removeHiddenClass,
  addHiddenClass
}