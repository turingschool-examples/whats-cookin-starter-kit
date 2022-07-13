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
filterName(name) {
  const recipe = this.recipes.find((value) => {
    return value.name.includes(name)
  })
  return recipe
}
}

export default RecipeRepository;
