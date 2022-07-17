import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipeData } from '../src/data/recipes';
import { ingredientsData } from '../src/data/ingredients';

describe('Recipe', () => {



    it('should be a function', () => {
        expect(Recipe).to.be.a('function')
    })

    it('should instantiate a new Recipe', () => {
        const firstRecipe = recipeData.find(x => !!x);
        let recipe = new Recipe(firstRecipe, ingredientsData);
        expect(recipe).to.be.an.instanceOf(Recipe);
    })


})