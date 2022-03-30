const {ingredientsData} = require('../data/ingredients');
const {recipeData} = require('../data/recipes');
import Ingredient from './Ingredient';
import Recipe from './Recipe';

class RecipeRepository {
  constructor() {
    this.recipeObjects = [];
    this.tags = [];
    // One class to get you started!
    //this is going to have methods to sort our data
  }
  
  addRecipes() {
    this.recipeObjects = recipeData.map((data) => {
      return new Recipe(data)
    })
  }

  getTags() {
    this.tags = recipeData.reduce((acc, recipe) => {
      recipe.tags.forEach((tag) => {
        if(!acc.includes(tag)) {
          acc.push(tag)
    }
      })
      return acc
    },[])
  }

  filterByTag(tag){
   return this.recipeObjects.filter((recipeObject) => {
     return recipeObject.tags.includes(tag);
   });
  }

  filterByName(recipeName){
    return this.recipeObjects.filter((recipeObject) => {
      return recipeObject.name.includes(recipeName);
    });
  }
}
export default RecipeRepository;
