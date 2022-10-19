import Recipe from "./Recipe";
import { recipeData } from "../data/recipes";

class RecipeRepository {
  constructor(recipes) {
    this.recipes = new Recipe(recipes)
    //console.log(this.recipes)
  }
  filterTag(tag) {
    return this.recipes.filter((recipe) => {
      return recipe.tags.includes(tag)
    })
  }
  filterName(name) {
    return this.recipes.filter((recipe) => {
      return recipe.name === name
    })
  }
}

// let recRep = new RecipeRepository(recipeData)
// console.log(recRep)

export default RecipeRepository;
