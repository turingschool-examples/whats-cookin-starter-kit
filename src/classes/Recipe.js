class Recipe {
    constructor(recipe) {
        this.id = recipe.id;
        this.image = recipe.image;
        this.ingredients = recipe.ingredients;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
    };

    returnIngredientNames(ingredientData) {
        const currentId = this.ingredients.map(ingredient => {
            return ingredient.id
        });
        const relevantIngredients = ingredientData.filter(ingredient => currentId.includes(ingredient.id));
      const names = [];
        relevantIngredients.forEach(ingredient => names.push(ingredient.name))
      return names;
    };

    returnIngredientCost(ingredientData) {
        const cost = () => {
          const reduced = this.ingredients.reduce((acc, ing) => {
            ingredientData.forEach(data => {
              if(ing.id === data.id) {
                acc += ing.quantity.amount * data.estimatedCostInCents
              };
            });
            return acc;
          }, 0);
          return reduced;
        };
        return cost();
    };

    returnInstructions() {
      let steps = [];
        this.instructions.forEach(currentInstruction => {
            steps.push(`Step ${currentInstruction.number}: ${currentInstruction.instruction}`);
        })
        console.log(steps);
        return steps;
    };
};


export default Recipe