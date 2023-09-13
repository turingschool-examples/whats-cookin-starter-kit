const { recipeData } = require("./data/recipe-test-data")

const findRecipe = (type, recipeList, tag) => {
  let recipeFound = recipeList.filter(recipe => {
    if(type === "name"){
    let recipeInfo = recipe[type];
    let recipeUndercase = recipeInfo.toLowerCase();
    return recipeUndercase.includes(tag.toLowerCase())
    }
    return recipe[type].includes(tag)
  })
  return recipeFound
}


// Return a specific recipe based on the id number

const specificRecipe = () => {
  return recipeData.find(recipe => recipe.id === clickedId)
}

export {
  findRecipe,
  specificRecipe
}