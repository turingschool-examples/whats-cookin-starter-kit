const { recipeData } = require("./data/recipe-test-data")

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

const findDirections = (recipeName) => {
  let chosenRecipe = recipeData.find(recipe => {
    return recipeName === recipe.name
  })
    return chosenRecipe.instructions
}

// Return a specific recipe based on the id number

const specificRecipe = () => {
  return recipeData.find(recipe => recipe.id === clickedId)
}

export {
  findRecipeByTag,
  findRecipeByName,
  findDirections,
  specificRecipe
}