const filterRecipes = (data, filterTerm) => {
  const filteredRecipes = data.filter((recipe) => {
     return recipe.tags.includes(filterTerm) || recipe.name === filterTerm
  })
  if(filteredRecipes.length === 0) {
    return 'Sorry, no matching results!'
  }
  return filteredRecipes
}

export {filterRecipes}