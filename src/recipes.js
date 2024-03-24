//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later!
import { ingredientsData } from "./data/ingredients";

export const findRecipeIngredients = (recipe) => {
  return recipe.ingredients.reduce((list, recipeIngredient) => {
    const ingredientName = ingredientsData.find(
      (ingredientData) => ingredientData.id == recipeIngredient.id
    ).name;

    list.push(ingredientName);
    return list;
  }, []);
};
