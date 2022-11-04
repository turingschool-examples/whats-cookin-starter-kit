import chai from 'chai';
const expect = chai.expect;
import Pantry from '../src/classes/Pantry';
import { userData, userData2 } from '../src/test-data/Pantry-test-data';
import User from '../src/classes/User';

import { recipe, multiRecipe } from '../src/test-data/Recipe-data';

import dummy from '../src/test-data/ingredient-test-data';

describe('Pantry describe block', () => {
 let user;
 let fancyPantry;

  beforeEach(() => {
  user = new User(userData);
  fancyPantry = new Pantry(user);
  user.pantry = fancyPantry;

  });

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should have a pantry', function() {
    expect(fancyPantry.pantry).to.deep.equal(userData.pantry);
  });

  it('should push missing ingredients to missingIngredients array', function() {
    recipe.ingredients[4].quantity.amount = 2;
    expect(fancyPantry.checkIngredients(recipe)).to.deep.equal([
        { id: 19334, quantity: { amount: 0.5, unit: 'c' } },
        { id: 1012047, quantity: { amount: 24, unit: 'servings' } },
        { id: 10019903, quantity: { amount: 2, unit: 'c' } }
      ]);
  });

  it('should push insufficient amount ingredients to missingIngredients array', function() {
    recipe.ingredients[4].quantity.amount = 3;
    expect(fancyPantry.checkIngredients(recipe)).to.deep.equal([
        { id: 19206, quantity: { amount: 1, unit: 'Tbsp'} },
        { id: 19334, quantity: { amount: 0.5, unit: 'c' } },
        { id: 1012047, quantity: { amount: 24, unit: 'servings' } },
        { id: 10019903, quantity: { amount: 2, unit: 'c' } }
      ]);
  });




    it('should add a name property to the objects in the missingIngredients array', function() {
      let checkedIngredients = fancyPantry.checkIngredients(recipe);
      expect(fancyPantry.getIngredientNames(checkedIngredients, dummy)).to.deep.equal([
        {
          id: 19206,
          quantity: { amount: 1, unit: 'Tbsp' },
          name: 'instant vanilla pudding'
        },
        {
          id: 19334,
          quantity: { amount: 0.5, unit: 'c' },
          name: 'brown sugar'
        },
        {
          id: 1012047,
          quantity: { amount: 24, unit: 'servings' },
          name: 'fine sea salt'
        },
        {
          id: 10019903,
          quantity: { amount: 2, unit: 'c' },
          name: 'semi sweet chips'
        }
      ])
    });


  it('should return ALL pantry contents with name and unit included', function() {
    let user2 = new User(userData2);
    let fancyPantry2 = new Pantry(user2);
    user2.pantry = fancyPantry2;
   expect(fancyPantry2.returnAllPantryContentsWithInfo(multiRecipe, dummy)).to.deep.equal([
      { ingredient: 20081, amount: 5, name: 'wheat flour', unit: 'c' },
      {
        ingredient: 11215,
        amount: 5,
        name: 'whole garlic clove',
        unit: 'clove'
      },
      { ingredient: 2047, amount: 6, name: 'salt', unit: 'tsp' },
      { ingredient: 1123, amount: 8, name: 'eggs', unit: 'large' },
      { ingredient: 2050, amount: 4, name: 'vanilla', unit: 'tsp' },
      { ingredient: 1102047, amount: 2, name: 's&p', unit: 'servings' },
      {
        ingredient: 19206,
        amount: 2,
        name: 'instant vanilla pudding',
        unit: 'Tbsp'
      },
      { ingredient: 1145, amount: 4, name: 'unsalted butter', unit: 'c' },
      { ingredient: 19335, amount: 4, name: 'sucrose', unit: 'c' },
      { ingredient: 9003, amount: 2, name: 'apple', unit: '' },
      {
        ingredient: 18372,
        amount: 3,
        name: 'bicarbonate of soda',
        unit: 'tsp'
      }
    ]);
  });

});
