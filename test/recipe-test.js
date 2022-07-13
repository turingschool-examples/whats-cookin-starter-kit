import { expect } from 'chai';
import Recipe from '../src/classes/Recipe'
import { recipeData } from '../src/data/recipes';

describe('recipe', () => {
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
        expect(recipe.returnNeeded(recipeData)).to.deep.equal([
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
})