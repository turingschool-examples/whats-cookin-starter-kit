import { assert, expect } from 'chai';
import Ingredient from '../src/classes/Ingredient'
import ingredientTestData from '../src/data/ingredientTestData';

describe('Ingredient', () => {
  let ingredient
  beforeEach(()=> {
    ingredient = new Ingredient(ingredientTestData)
    console.log(ingredient)
  })

  it('Should be a function', ()=> {
    assert.isFunction(Ingredient);
  })

  it('Should be able to create an instance of Ingredient', ()=> {
  assert.instanceOf(ingredient, Ingredient)
  })
  
  it('Should have an id number when created', ()=> {
    assert.equal(ingredient.id, )
  })
  it('Should have a name when created', ()=> {

  })
  it('Should have an estimated cost in cents (per unit)', ()=> {

  })























})