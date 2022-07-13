import { ingredientsData } from '../data/ingredients';
// It should hold on to all its information (provided in the data file).
// It should have methods to:
// Determine the names of ingredients needed
class Recipe {
    constructor(data) {
        this.requiredIngredients = [];
        this.id = data.id;
        this.image = data.image;
        this.ingredients = data.ingredients;
        this.instructions = data.instructions;
        this.name = data.name;
        this.tags = data.tags;
        this.ingredients.forEach(ingredient => {
            const currentIngredient = ingredientsData.find(ing => ing.id === ingredient.id);
            this.requiredIngredients.push(currentIngredient);
        });
    };

};
export default Recipe;