import recipeData from '../src/data/recipes.js';

export const filterRecipeByTag = (tags) => {
    const filteredRecipes = [];

    recipeData.forEach((recipe) => {
        if (tags.every((tag) => recipe.tags.includes(tag))) {
            filteredRecipes.push(recipe);
        }
    }); 
    return filteredRecipes;
};
