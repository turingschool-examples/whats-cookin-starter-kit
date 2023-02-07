import { assert, expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';
import recipeTestData from '../src/data/recipeTestData';

describe('Recipe1', ()=> {
  let recipe
  beforeEach(()=> {
    recipe = new Recipe(recipeTestData)
  })

  it('Should be a function', () => {
    assert.isFunction(Recipe);
  })

  it('Should be able to create an instance of Recipe', ()=> {
    assert.instanceOf(recipe, Recipe)
  })



})