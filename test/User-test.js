import { expect } from 'chai';
import Recipe from '../src/classes/Recipe.js';
import User from '../src/classes/User.js';
const data = require('../src/data/recipes.js');
const data1 = require('../src/data/ingredients.js');
const data2 = require('../src/data/users.js');
const testRecipeData = data.testRecipeData;
const testIngData = data1.testIngredients;
const testUserData = data2.testUserData;

describe('User', () => {
  
  let user1;
  let user2;
  

  let recipe;
  let recipe2;
  let recipe3;

  beforeEach(() => {
    user1 = new User(testUserData[0]);
    user2 = new User(testUserData[1]);

    recipe = new Recipe(testRecipeData[0], testIngData);
    recipe2 = new Recipe(testRecipeData[1], testIngData);
    recipe3 = new Recipe(testRecipeData[2], testIngData);
  
    });
    it('should be a function', () => {
      expect(User).to.be.a('function');
    });

    it('should have a name', () => {
      expect(user1.name).to.equal('Saige O\'Kon');
      expect(user2.name).to.equal('Ephraim Goyette');
    });

    it('should have an id', () => {
      expect(user1.id).to.equal(1);
      expect(user2.id).to.equal(2);
    });

    it('should have a pantry of ingredients', () => {
      expect(user1.pantry).to.deep.equal([
        {
          ingredient: 11297,
          amount: 4,
        },
        {
          ingredient: 1082047,
          amount: 10,
        },
        {
          ingredient: 20081,
          amount: 5,
        },
      ]);
      expect(user2.pantry).to.deep.equal([
        {
          ingredient: 6150,
          amount: 3,
        },
        {
          ingredient: 1032009,
          amount: 7,
        },
        {
          ingredient: 1082047,
          amount: 8,
        },
      ]);
    });
    it('should store recipes to cook', () => {
      user1.addRecipesToCook(recipe)
      user1.addRecipesToCook(recipe2)

      expect(user1.recipesToCook[0]).to.deep.equal(recipe)
      expect(user1.recipesToCook[1]).to.deep.equal(recipe2)
  });

  it('should remove recipes to cook', () => {
    user1.addRecipesToCook(recipe)
    user1.addRecipesToCook(recipe2)

    expect(user1.recipesToCook[0]).to.deep.equal(recipe)
    expect(user1.recipesToCook[1]).to.deep.equal(recipe2)
});
}); 
