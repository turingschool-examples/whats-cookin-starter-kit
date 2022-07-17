recipeRepository.recipes.filter((recipe) => {
  let containsOr = false;

  if (
    userSubmittedKeywords.some((keyword) => {
      return recipe.tags.includes(keyword);
    })
  ) {
    containsOr = true;
  }

  return containsOr;
});

// AND
// Give me just those recipes for whom their tags array contains at EVERY SINGLE ONE of these keywords

recipeRepository.recipes.filter((recipe) => {
  let containsAnd = false;

  if (
    userSubmittedKeywords.every((keyword) => {
      return recipe.tags.includes(keyword);
    })
  ) {
    containsAnd = true;
  }

  return containsAnd;
});
