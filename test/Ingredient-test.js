import { assert, expect } from 'chai';
import Ingredient from '../src/classes/Ingredient'
import ingredientTestData from '../src/data/ingredientTestData';

describe('Ingredient', () => {
  let ingredient
  beforeEach(()=> {
    // console.log(ingredientTestData)
    ingredient = new Ingredient(ingredientTestData[0])
    // console.log('line 10:', ingredient)
  })

  it('Should be a function', ()=> {
    assert.isFunction(Ingredient);
  })

  it('Should be able to create an instance of Ingredient', ()=> {
  assert.instanceOf(ingredient, Ingredient)
  })

  it('Should have an id number when created', ()=> {
    assert.equal(ingredient.id, 20081);
  })
  it('Should have a name when created', ()=> {
    assert.equal(ingredient.name, 'wheat flour');
  })
  it('Should have an estimated cost in cents (per unit)', ()=> {
    assert.equal(ingredient.costInCents, 142);
  })























})