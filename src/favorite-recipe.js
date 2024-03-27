

export function isFavorited(favoriteRecipes, recipe_dataset) {
    return favoriteRecipes.filter(recipe => recipe_dataset.some(dataRecipe => dataRecipe.id === recipe.id));
