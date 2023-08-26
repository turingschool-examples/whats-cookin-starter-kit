//NOTE: Your DOM manipulation will occur in this file

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
function exampleFunction1(person) {
  console.log(`oh hi there ${person}`);
}

function exampleFunction2(person) {
  console.log(`bye now ${person}`);
}

const createRecipeCards = (recipes) => {
  // INSERT SECTION WHERE YOU'RE BUILDING THE CARDS HERE .innerHTHML = ""
  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.id.add(recipe.id);
    recipe

  });
};

export { exampleFunction1, exampleFunction2 };
