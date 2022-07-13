import { expect } from 'chai';
import Recipe from '../src/classes/Recipe'
import { recipeData } from '../src/data/recipes';
import { ingredientsData } from '../src/data/ingredients'

describe('Recipe Test', () => {
    it('Should be an instance of recipe', () => {
        expect(Recipe).to.be.a('function');
    });
    const keys = Object.keys(recipeData[0]);
    const firstRecipe = recipeData[0];
    const recipe = new Recipe(firstRecipe);
    keys.forEach(key => {
        it(`should create a recipe object with a key of ${key}`, () => {
            expect(recipe[key]).to.equal(firstRecipe[key]);
        });
    });
    it('should be able to get ingredients names', () => {
        recipe.getIngredientDetail();
        expect(recipe.returnNeeded()).to.deep.equal([
            "wheat flour",
            "bicarbonate of soda",
            "eggs",
            "sucrose",
            "instant vanilla pudding",
            "brown sugar",
            "salt",
            "fine sea salt",
            "semi sweet chips",
            "unsalted butter",
            "vanilla"
        ]);
    });
    it('should be dynamic for ingredients names', () => {
        const firstRecipe = recipeData[1];
        console.log('recipe', firstRecipe);
        console.log('first ingredients', firstRecipe.ingredients)
        expect(recipe.getIngredientDetail()).to.deep.equal([firstRecipe.ingredients]);
    });
    it('should get cost of ingredients', () => {
        expect(recipe.getCostToDollar(recipe.requiredIngredients)).to.equal(59.21);
    });
});