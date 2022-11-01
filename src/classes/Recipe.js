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
        return this.ingredients.reduce((acc, ing) => {
          ingredientData.forEach(data => {
            if(ing.id === data.id) {
              acc.push(data.name)
            };
          });
          return acc;
        }, []);
  };

    returnIngredientCost(ingredientData) {
        const cost = this.ingredients.reduce((acc, ing) => {
            ingredientData.forEach(data => {
              if(ing.id === data.id) {
                acc += ing.quantity.amount * data.estimatedCostInCents
              };
            });
            return acc
          }, 0);
          return (Math.round((cost / 100) * 100) / 100).toFixed(2);
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