import { expect } from 'chai';
import Recipe from '../src/classes/Recipe'
import { recipeData } from '../src/data/recipes';

describe('recipe', () => {
    // // let recipe;

    // // beforeEach(() => {
    // //     recipe = new Recipe();
    // });
    it('Should be an instance of recipe', () => {
        expect(Recipe).to.be.a('function');
    });
    const keys = Object.keys(recipeData[0]);
    const firstRecipe = recipeData[0];
    const recipe = new Recipe(firstRecipe)
    console.log({ recipe });
    keys.forEach(key => {
        it(`should create a recipe object with a key of ${key}`, () => {
            expect(recipe[key]).to.equal(firstRecipe[key]);
        });
    });
    // it('should hold all the recipe objects values', () => {
    //     const firstRecipe = recipeData[0];
    //     let recipe = new Recipe(firstRecipe)
    //     expect(recipe).to.equal(firstRecipe);
    // })
})