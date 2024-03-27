export function addRecipeToArray(recipesArray, recipeToAdd) {
    const recipeExists = recipesArray.some((recipe) => recipe.id === recipeToAdd.id);
    if (!recipeExists) {
        recipesArray.push(recipeToAdd);
    }
}

export function removeRecipeFromArray(recipesArray, recipeIdToRemove) {
    const recipeIndex = recipesArray.findIndex((recipe) => recipe.id === recipeIdToRemove);
    if (recipeIndex > -1) {
        recipesArray.splice(recipeIndex, 1);
    }
}
