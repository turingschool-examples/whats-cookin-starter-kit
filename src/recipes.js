import "./data/recipes";
import recipeData from "./data/recipes";

const recipes = recipeData;

function filterRecipesByTag(recipes, tag) {
  const filteredRecipesByTag = recipes.filter((recipe) =>
    recipe.tags.includes(tag)
  );
  return filteredRecipesByTag;
}

function filterRecipesByName(recipes, name) {
  const filteredRecipesByName = recipes.filter((recipe) => {
    const upperCaseRecipeName = recipe.name.toUpperCase();
    return upperCaseRecipeName.includes(name.toUpperCase());
  });
  return filteredRecipesByName;
}

export { filterRecipesByTag, filterRecipesByName };
