import Recipe from "./Recipe";
import { recipeData } from "../data/recipes";

class RecipeRepository {
  constructor(recipes) {
    this.recipes = this.createRecipes(recipes)
  }
  createRecipes(data) {
    return data.map((recipeInfo)=>{
      return new Recipe(recipeInfo);
    })
  }
  filterTag(tag) {
    return this.recipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    })
  }
  filterName(name) {
    return this.recipes.filter((recipe) => {
      return recipe.name === name;
    })
  }
}

export default RecipeRepository;
