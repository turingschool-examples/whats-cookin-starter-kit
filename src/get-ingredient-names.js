// take an object recipe as argument
// return an array of strings (ingredients names)

/**
 * new method learned:
 * Array.sort().join() to compare array values
 * 
 * testing:
 * to use chai to compare array with same values: expect().to.have.same.members()
 * 
 * git:
 * mv/rename files in git: git mv old-file-name new-file-name
 */

const getIngredientNames = (recipe, ingredientsData) => {
  const ingredientIDs = recipe.ingredients.map(ele => {return ele.id});
  const ingredientNames = ingredientIDs.map(id => {
    const ingredient = ingredientsData.find(ingredient => { return ingredient.id === id;});
    return ingredient.name;
  });
  return ingredientNames;
};

export { getIngredientNames };