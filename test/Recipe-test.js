import { assert, expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';
import recipeTestData from '../src/data/recipeTestData';

describe('Recipe1', ()=> {
  let recipe

  beforeEach(()=> {
    recipe = new Recipe(recipeTestData[0])
    console.log('line 10', recipe);
    console.log('line 11', recipe.details.id)
  })

  it('Should be a function', () => {
    assert.isFunction(Recipe);
  })

  it('Should be able to create an instance of Recipe', ()=> {
    assert.instanceOf(recipe, Recipe)
  })

  it('Should contain its own ID number', ()=>{
    assert.equal(recipe.details.id, 595736);
  })

  it('Should contain the image path of a particular recipe preview', ()=> {
    assert.equal(recipe.details.image, )
  })

  it('Should contain the ingredients used to make each recipe', ()=> {
    assert.equal(recipe.details.ingredients, )
  })

  it('Should contain the instructions to follow to create it', ()=> {
    assert.equal(recipe.details.instructions, )
  })

  it('Should contain the name of each recipe', ()=> {
    assert.equal(recipe.details.name, )
  })

  it('Should contain the tags that enable each recipe to be filtered or searched', ()=> {
    assert.equal(recipe.details.tags, )
  })

  it('Should be able to return a list of its ingredients', ()=> {
    assert.equal(recipe.nameIngredients(), )
  })

  it('Should be able to return the total cost of its own ingredients', ()=> {
    assert.equal(recipe.returnCost(), )
  })

  it('Should be able to return the directions to make it', ()=> {
    assert.equal(recipe.giveDirections(), )
  }
  )
})