// import recipeData from "../data/recipes"
// import ingredientsData from "../scripts.js"
import Recipe from "./Recipe"

class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipeList = this.instantiateRecipes(recipeData, ingredientsData);
  }

  instantiateRecipes(recipeData, ingredientsData) {
    //Note: we used dot notation below to access the correct array in recipeData.recipeData and ingredientsData.ingredientsData. Refactor this in the second part of the project to use locally hosted data.
    return recipeData.recipeData.map(recipe => new Recipe(recipe, ingredientsData.ingredientsData))
  }

  filterByTag(tag) {
    return this.recipeList.filter(recipe => recipe.tags.includes(tag));
  }

  filterByName(name) {
    return this.recipeList.filter(recipe => recipe.name.includes(name))
  }

  recipeOfTheDay() {
    let randomNum = Math.floor(Math.random() * this.recipeList.length);
    return this.recipeList[randomNum];
  }
}

export default RecipeRepository;
