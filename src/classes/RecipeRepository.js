import ingredientsData from '../data/ingredients';
import recipeData from '../data/recipes';
import Ingredient from '../classes/Ingredient'
import Recipe from '../classes/Recipe';

 
class RecipeRepository {
 constructor(recipeData) {
   this.recipeData = recipeData
 }

  listRecipeTags(tag) {
    const filteredByTag = this.recipeData.filter(recipe => 
      recipe.tags.includes(tag)
      );
      return filteredByTag;
  }

  // listRecipeNames()

}



 
export default RecipeRepository;