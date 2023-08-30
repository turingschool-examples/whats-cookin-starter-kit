// import from testData.js
// export to recipeRepositories

const { recipeData, ingredientsData } = require("./testData")

// Return a filtered list of recipes based on a tag. (Extension option: filtering by multiple tags)

const findRecipeByTag = (tag) => {
  let recipeByTag = recipeData.filter(recipe => {
    return recipe["tags"].includes(tag)
  })
  return recipeByTag
}

// Return a filtered list of recipes based on a recipe name. (Extension option: filtering by name or ingredients)

const findRecipeByName = (name) => {
  let recipeByName = recipeData.filter(recipe => {
    return recipe["name"] === name
  })
  return recipeByName
}

// Determine the names of ingredients needed for a given recipe.

const findRecipeIngredients = (id) => {
  let givenRecipe = recipeData.find(recipe => {
    return recipe["id"] == id
  })

  let ingredientIds = givenRecipe["ingredients"].map(ingredient => {
    return ingredient["id"]
  })

  let recipeIngredients = ingredientsData.filter(ingredient => {
    return ingredientIds.includes(ingredient["id"])
  })

  return recipeIngredients.map(ingredient => {
    let ingredientNames = ingredient["name"]
    return ingredientNames
  } )
}

// Return a specific recipe based on the id number

const specificRecipe = () => {
  return recipeData.find(recipe => recipe.id === clickedId)
}

const calculateCost = (clickedId) => {
  const clickedRecipe = recipeData.find(recipe => recipe.id === clickedId);
  let reducedIngredients = clickedRecipe.ingredients.reduce((accumulator, currentValue) => {
    let ingredientPrice = ingredientsData.find(ingredientDetail => ingredientDetail.id === currentValue.id);
    accumulator += ingredientPrice.estimatedCostInCents * currentValue.quantity.amount;
    return accumulator;
  }, 0);

  const costInDollars = (reducedIngredients / 100).toFixed(2); // Convert to dollars with 2 decimal places
  return `$${costInDollars}`;
};

const findDirections = (recipeName) => {
  let chosenRecipe = recipeData.find(recipe => {
    return recipeName === recipe.name
  })
    return chosenRecipe.instructions
}

module.exports = {
  findRecipeByTag,
  findRecipeByName,
  findRecipeIngredients,
  specificRecipe,
  calculateCost,
  findDirections
}