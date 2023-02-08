import ingredientTestData from "../data/ingredientTestData";
import ingredientsData from "../data/ingredients";
import recipeData from "../data/recipes";


class Ingredient {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.costInCents = data.estimatedCostInCents;
  };
//return ingredient by name using id
//return cost using id 

  returnIngredientByName(num) {
    const findName = ingredientsData.find(ingredient => ingredient.id === num);
    if (findName === undefined) {
      return "Error"
    } else {
      return findName.name;
    }
  };
};

export default Ingredient;