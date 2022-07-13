class RecipeRepository {
  constructor(cookbook) {
    this.recipes = cookbook
    // One class to get you started!
  }
  filterTag(tag) {
    const recipes = this.recipes.filter((recipe) => {
      
      return recipe.tags.includes(tag)
})
    return recipes
}
}

export default RecipeRepository;
