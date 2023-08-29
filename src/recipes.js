const filterByTag = (tags, currentActiveRecipes, allrecipes) => {
  // console.log(currentActiveRecipes);

  if (tags.length === 0) {
    currentActiveRecipes = allrecipes;
  } else if (tags.length === 1) {
    currentActiveRecipes = [];
    tags.forEach((tag) => {
      allrecipes.forEach((recipe) => {
        if (recipe.tags.includes(tag)) {
          currentActiveRecipes.push(recipe);
        }
      });
    });
  } else {
    tags.forEach((tag) => {
      allrecipes.forEach((recipe) => {
        if (recipe.tags.includes(tag)) {
          let check = checkArrayForObject(recipe, currentActiveRecipes);
          if (check === false) {
            currentActiveRecipes.push(recipe);
          }
        }
      });
    });
  }
  return currentActiveRecipes;
};

function checkArrayForObject(object, array) {
  let finding = array.find((element) => {
    return object.id === element.id;
  });
  if (finding === undefined) {
    return false;
  } else {
    return true;
  }
}

const searchRecipes = (searchTerm, recipes) => {
  return recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const getIngredientNames = (recipe, ingredients) => {
  let ingredientIds = recipe.ingredients.map((ingr) => {
    return ingr.id;
  });
  let ingredientNames = ingredients.reduce((acc, cv) => {
    if (ingredientIds.includes(cv.id)) {
      acc.push(cv.name);
    }
    return acc;
  }, []);
  return ingredientNames;
};

// we don't need this function
// const getRecipeInstructions = (recipeName, recipes) => {
//   let recipe = recipes.find((recipe) => {
//     return recipe.name === recipeName;
//   });
//   if (recipe) {
//     return recipe.instructions;
//   } else {
//     return [];
//   }
// };

const calculateCost = (recipe, ingredients) => {
  let ids = recipe.ingredients.map((ingredient) => {
    return ingredient.id;
  });

  let recipeIngredients = ingredients.filter((ingredient) => {
    return ids.includes(ingredient.id);
  });

  if (recipeIngredients.length !== recipe.ingredients.length) {
    return "Ingredient not found";
  }

  let totalCost = recipeIngredients.reduce((total, ingredient) => {
    recipe.ingredients.forEach((recipeIngredient) => {
      if (recipeIngredient.id === ingredient.id) {
        total +=
          ingredient.estimatedCostInCents * recipeIngredient.quantity.amount;
      }
    });
    return total;
  }, 0);

  return totalCost;
};

module.exports = {
  filterByTag,
  searchRecipes,
  getIngredientNames,
  // getRecipeInstructions,
  calculateCost,
};
