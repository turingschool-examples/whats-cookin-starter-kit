
const filterByTag = (tag, recipes) => {
  const searchedTag = tag.toLowerCase();
  const searchedRecipes = recipes.filter(recipe => {
    return recipe.tags.includes(searchedTag)
  })
  if (!searchedRecipes.length) {
    return 'Sorry, there are no recipes with this tag!'
  }
  return searchedRecipes
}

const filterByName = (name, recipes) => {
  const searchedName = name.toLowerCase();
  const searchedRecipes = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchedName)
  })
  if (!searchedRecipes.length) {
    return 'Sorry, there are no recipes with this name!'
  }
  return searchedRecipes
}

export { filterByTag, filterByName }