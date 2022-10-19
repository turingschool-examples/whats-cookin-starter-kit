class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
  }
  filterByTag = (tag) => {
    const filteredList = this.recipes.filter(recipe => {
      let tags = Object.values(recipe.tags)
      if (tags.includes(tag.toLowerCase())) {
        return recipe
      }
    })
    return filteredList
  }
  filterByName = (name) => {
    // Iterate through the list of recipes using .filter()
    // Access each recipe object's name string
    // Make the name string lowercase with .toLowerCase()
    // Use .include() on each name to see if any part
    // of its name matches the argument
    // return matched ones to a new array
    // return the array in the outer scope
    const filteredList = this.recipes.filter(recipe => {
      let lowerCaseRecipeName = recipe.name.toLowerCase()
      if(lowerCaseRecipeName.includes(name.toLowerCase())) {
        return recipe
      }
    })
    return filteredList
  }
}

export default RecipeRepository;
