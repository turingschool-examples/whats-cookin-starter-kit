const { recipeData, ingredientsData } = require("./data/recipe-test-data")

const findRecipeByTag = (recipeList, tag) => {
  let recipeByTag = recipeList.filter(recipe => {
    return recipe["tags"].includes(tag)
  })
  return recipeByTag
}

// Return a filtered list of recipes based on a recipe name. (Extension option: filtering by name or ingredients)

const findRecipeByName = (recipeData, name) => {
  let recipeByName = recipeData.filter(recipe => {
    return recipe["name"] === name
  })
  return recipeByName
}

// Determine the names of ingredients needed for a given recipe.

const findRecipeIngredients = (recipeData, ingredientsData, id) => {
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