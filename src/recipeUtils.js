export function recipesFromTag(recipes, tag) {
  return recipes.filter((recipe) => {
    return recipe.tags.includes(tag)
  });
}

export function recipesfromName(recipes, name) {
  return recipes.filter((recipe) => {
    return recipe.name.includes(name)
  })
}




