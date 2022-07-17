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

  addInputToSearch(keyword) {
    let lowerCaseInput = keyword.toLowerCase();
    if (!this.selectedInput.includes(lowerCaseInput)) {
      this.selectedInput.push(lowerCaseInput);
    }
  }

  lowerCaseIngredients() {
    this.recipes.forEach((recipe) => {
      recipe.portions = recipe.portions.reduce((newPortions, portion) => {
        newPortions.push({
          ingredientId: portion.ingredientId,
          name: portion.name.toLowerCase(),
          amount: portion.amount,
          cost: portion.cost,
          unit: portion.unit,
        });
        return newPortions;
      }, []);
    });
  }

  filterByMultipleIngredients() {
    this.filteredAllRecipes = this.recipes.filter((recipe) => {
      let containsOr = false;
      recipe.portions.forEach((portion) => {
        if (
          this.selectedInput.some((keyword) => {
            return portion.name.includes(keyword);
          })
        ) {
          containsOr = true;
        }
      });
      return containsOr;
    });
    return this.filteredAllRecipese;
  }

  filterByMultipleTags() {
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

  filterByMultipleRecipeNames() {
    this.filteredAllResults = this.recipes.filter((recipe) => {
      let lowerCaseRecipeName = recipe.name.toLowerCase();
      let containsOr = false;
      if (
        this.selectedInput.some((input) => {
          return lowerCaseRecipeName.includes(input);
        })
      ) {
        containsOr = true;
      }
      return containsOr;
    });
    return this.filteredAllResults;
  }

  importRecipesFromFile(recipeData, ingredientsData) {
    let recipeToAdd;
    recipeData.forEach((recipeDatum) => {
      let data = {
        id: recipeDatum.id,
        name: recipeDatum.name,
        imageURL: recipeDatum.image,
        portions: recipeDatum.ingredients.map((ingredientObject) => {
          let ingredientData = ingredientsData.find(
            (storedIngredient) => storedIngredient.id === ingredientObject.id
          );
          let portion = this.createPortion(ingredientObject, ingredientData);
          return portion;
        }),
        instructions: recipeDatum.instructions.map(
          (instruction) => instruction.instruction
        ),
        tags: recipeDatum.tags,
      };
      recipeToAdd = new Recipe(data);
      this.addRecipe(recipeToAdd);
    });
  }

  createPortion(ingredientObject, ingredientData) {
    return {
      ingredientId: ingredientObject.id,
      name: ingredientData["name"],
      cost: ingredientData["estimatedCostInCents"],
      amount: ingredientObject.quantity.amount,
      unit: ingredientObject.quantity.unit,
    };
  }

  clearData() {
    this.selectedInput = [];
    this.filteredAllRecipes = [];
  }
}

export default RecipeRepository;