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

const specificRecipe = recipeData.find(recipe => recipe.id === clickedId)


// Calculate the cost of a given recipes ingredients

const calculateCost = (recipeData) => {
  let reducedIngredients = recipeData.ingredients.reduce((accumulator, currentValue) => {
    let ingredientPrice = ingredientsData.find((ingredientDetail) => ingredientDetail.id === currentValue.id)
     accumulator += ingredientPrice.estimatedCostInCents * currentValue.quantity.amount
    
    return accumulator
    }, 0)
  return reducedIngredients / 100
}


module.exports = {
  findRecipeByTag,
  findRecipeByName,
  findRecipeIngredients,
  specificRecipe,
  calculateCost
}