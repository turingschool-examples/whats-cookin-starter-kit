import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipes } from '../src/data/recipes';

describe('Recipe', () => {

   

    it('should be a function', () => {
        expect(Recipe).to.be.a('function')
    })

    it('should instantiate a new Recipe', () => {
        let recipe = new Recipe()
        expect(recipe).to.be.an.instanceOf(Recipe)
    })


})