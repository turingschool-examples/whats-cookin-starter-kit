const { recipeData } = require("./data/recipe-test-data")

const findRecipe = (typeOfTag, recipeList, tag) => {
  if (tag.trim() === "") {
    return [];
  }
  let recipeFound = recipeList.filter(recipe => {
    if (typeOfTag === "name") {
      let recipeInfo = recipe[typeOfTag];
      let recipeUndercase = recipeInfo.toLowerCase();
      return recipeUndercase.includes(tag.toLowerCase());
    } 
    return recipe[typeOfTag].includes(tag);
  });
  return recipeFound;
}

// Return a specific recipe based on the id number

const specificRecipe = () => {
  return recipeData.find(recipe => recipe.id === clickedId)
}

export {
  findRecipe,
  specificRecipe
}