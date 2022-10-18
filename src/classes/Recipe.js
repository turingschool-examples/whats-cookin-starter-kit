import ingredientsData from '../data/ingredients';

class Recipe {
    constructor(recipe) {
        this.id = recipe.id;
        this.image = recipe.image;
        this.ingredients = recipe.ingredients;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
    }
    ingredientsNeeded() {
        let ingredientsNeeded = [];
        this.ingredients.forEach((ingredient) => {
            let ingredientsID = ingredient.id
            let ingredientFound = ingredientsData.find( ing => ingredientsID === ing.id)
            ingredientsNeeded.push(ingredientFound.name)
        })
        console.log(ingredientsNeeded)
        console.log(ingredientsNeeded.length)
        return ingredientsNeeded
    }
};
  
export default Recipe;