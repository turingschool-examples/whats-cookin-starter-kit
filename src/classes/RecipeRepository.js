import ingredientsData from '../data/ingredients';
import recipeData from '../data/recipes';
import Ingredient from '../classes/Ingredient'
import Recipe from '../classes/Recipe';
 
class RecipeRepository {
 constructor(recipeData) {
   this.recipeData = recipeData
 }
}
 
export default RecipeRepository;