import Recipe from "./Recipe";

class RecipeRepository {
  constructor() {
    this.recipes = [];
    this.allTags = [];
    this.selectedInput = [];
    this.filteredAllRecipes = [];
  }
  addRecipe(recipe) {
    this.recipes.push(recipe);
    this.addTags(recipe.tags);
  }

  addTags(newTags) {
    newTags.forEach((tag) => {
      if (!this.allTags.includes(tag)) {
        this.allTags.push(tag);
      }
    });
  }

  // filterRecipesByTag(tag) {
  //   let matchingRecipes = this.recipes.filter((recipe) => {
  //     if (recipe.tags.includes(tag)) {
  //       return true;
  //     }
  //   });
  //   return matchingRecipes;
  // }

  addInputToSearch(keyword) {
    let lowerCaseInput = keyword.toLowerCase();
    if (!this.selectedInput.includes(lowerCaseInput)) {
      this.selectedInput.push(lowerCaseInput);
    }
    
  }

  filterByMultipleTags(keyword) {
    
    this.filteredAllRecipes = this.recipes.filter((recipe) => {
      let containsOr = false;
      if (
        this.selectedInput.some((keyword) => {
          return recipe.tags.includes(keyword);
        })
      ) {
        containsOr = true;
      }
      return containsOr;
    });
    return this.filteredAllRecipes;
  }

  filterRecipesByName(input) {
    let matchingRecipes = this.recipes.filter((recipe) => {
      let lowerCaseRecipeName = recipe.name.toLowerCase();
      let lowerCaseInput = input.toLowerCase();
      if (lowerCaseRecipeName.includes(lowerCaseInput)) {
        return true;
      }
    });
    return matchingRecipes;
  }

  importRecipesFromFile(recipeData, ingredientsData) {
    var recipeToAdd;

    recipeData.forEach((recipeDatum) => {
      var data = {
        id: recipeDatum.id,
        name: recipeDatum.name,
        imageURL: recipeDatum.image,
        portions: recipeDatum.ingredients.map((ingredientObject) => {
          var ingredientData = ingredientsData.find(
            (storedIngredient) => storedIngredient.id === ingredientObject.id
          );
          var portion = this.createPortion(ingredientObject, ingredientData);
          return portion;
        }),
        instructions: recipeDatum.instructions.map(
          (instruction) => instruction.instruction
        ), //recipeDatum.instructions,
        tags: recipeDatum.tags,
      };
      recipeToAdd = new Recipe(data);
      this.addRecipe(recipeToAdd);
    });
  }

  createPortion(ingredientObject, ingredientData) {
    return {
      ingredientId: ingredientObject.id, // 20081
      name: ingredientData["name"], // “wheat flour”
      cost: ingredientData["estimatedCostInCents"], // 142
      amount: ingredientObject.quantity.amount, // 1.5
      unit: ingredientObject.quantity.unit, // “c”
    };
  }
}

export default RecipeRepository;
