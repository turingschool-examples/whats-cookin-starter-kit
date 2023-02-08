import recipeTestData from '../data/recipeTestData'
import ingredientTestData from '../data/ingredientTestData';

class Recipe {
  
  constructor(data) {
    this.details = data;
  }

  nameIngredients() {
    console.log(this.details.ingredients[0].id)
    let ingredientList = [];
     ingredientList = this.details.ingredients.map(ingredient => {
      if {ingredientTestData.id === this}
      // ingredient.id === ingredientTestData.id;
      return ingredientTestData[ingredient.id]
    });
    return ingredientList
    };
    //iterate thru recipe Data and if id there matches ingredientTestData id
    //then return ingredientTestData.name 
  };

  // returnCost() {

  // };

  // giveDirections() {

  // };


export default Recipe;