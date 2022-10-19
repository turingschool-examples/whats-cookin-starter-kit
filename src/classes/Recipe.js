class Recipe {
    constructor(id, image, ingredients, instructions, name, tags) {
        this.id = id;
        this.image = image;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.name = name;
        this.tags = tags;
    };

    returnIngredientNames(ingredientData) {
        const currentId = this.ingredients.map(ingredient => {
            return ingredient.id
        });
        const relevantIngredients = ingredientData.filter(ingredient => currentId.includes(ingredient.id));
      const names = []
        relevantIngredients.forEach(ingredient => names.push(ingredient.name))
      return names;
    };

    returnIngredientCost(ingredientData) {
        const currentId = this.ingredients.map(ingredient => {
            return ingredient.id
        });
        const relevantIngredients = ingredientData.filter(ingredient => currentId.includes(ingredient.id));
        const cost = relevantIngredients.reduce((acc, ingredient) => {
            return acc + ingredient.estimatedCostInCents
        }, 0);
        return cost;
    };

    returnInstructions() {
        this.instructions.forEach(currentInstruction => {
            return `Step ${currentInstruction.number}: ${currentInstruction.instruction}`;
        })
    };
};


module.exports = Recipe;