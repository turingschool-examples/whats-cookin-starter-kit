class RecipeRepository {
  constructor(newRecipes) {
    this.newRecipes = newRecipes
    
  }
  filterByTag(tagName) {
    const tagFilter = this.newRecipes.filter((recipe) => {
      if (recipe.tags.includes(tagName)){
        console.log('hi there');
        return recipe
      }
    })
    return tagFilter
  }
  filterByName(recipeName) {
    const nameFilter = this.newRecipes.filter((recipe) => {
      if(recipe.name === recipeName){
        return recipe
      }
    })
    return nameFilter
  }
}

export default RecipeRepository;
