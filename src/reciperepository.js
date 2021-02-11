class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes

  }

  filterRecipesViaTags(tags) {
    const search =  this.recipes.reduce((recipes, recipe) => {
      let count = 0;
      tags.forEach(tag => {
        if (recipe.tags.includes(tag)) {
          count += 1;
        }
      })
      if (count === tags.length) {
        recipes.push(recipe.name)
      }
      return recipes
    }, [])
    return search
  }

  filterRecipesViaName(itemName, ourIngredients) {
    const search = this.recipes.filter(recipe =>
      recipe.returnIngredientNames(ourIngredients).includes(itemName) ||
      recipe.name.includes(itemName));
    const results = search.map(result => result.name);
    return results
  }
}



module.exports = RecipeRepository;
