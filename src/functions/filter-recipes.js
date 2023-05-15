
// filter by tag function

const filterByTag = (recipeData, tagInput) => {
  const filteredRecipes = recipeData.reduce((acc, recipe) => {
    recipe.tags.forEach(tag => {
      if (tag === tagInput) {
        acc.push(recipe)
      } 
    })
    return acc;
  }, [])
  if (filteredRecipes.length === 0) {
    return 'Error: try a new tag';
  } else {
    return filteredRecipes;
  }
}

// filter by name function
  // input: data and name
  // output: any recipe that contains the name input. ex. chocolate should return chocolate cupcakes

const filterByName = (recipeData, nameInput) => {

}

export { filterByTag, filterByName }
