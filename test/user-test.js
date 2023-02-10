import { assert, expect } from 'chai';
import User from '../src/classes/userClass';
import usersTestData from '../src/data/userTestData';
import recipeTestData from '../src/data/recipeTestData';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/recipeClass';

describe('User', () => {
  let user
  beforeEach(() => {
    user = new User(usersTestData[0]);
  });

  it('should be an instance of User', () => {
    assert.instanceOf(user, User);
  });

  it('should be a function', () => {
    assert.isFunction(User);
  });

  it('should have a name, Id, and pantry', () => {
    assert.equal(user.name, usersTestData[0].name);
    assert.equal(user.id, usersTestData[0].id);
    assert.equal(user.pantryItems, usersTestData[0].pantry);
  });

  it('should have a recipe to cook list', () => {
    assert.deepEqual(user.recipesToCook, []);
  });

  it('should be able to add or remove a recipe from their list', () => {
    user.addRecipeToCook(recipeTestData[0]);
    assert.deepEqual(user.recipesToCook[0], new Recipe(user.recipesToCook[0]));
    
    user.addRecipeToCook(recipeTestData[1]);
    assert.equal(user.recipesToCook.length, 2);
    
    user.removeRecipeFromCook(user.recipesToCook[1], 1);
    assert.deepEqual(user.recipesToCook.length, 1);
  });

  it('should be able to filter my recipes by tag', () => {
    user.addRecipeToCook(recipeTestData[1]);
    user.findByTag('lunch');
    assert.deepEqual(user.recipesToCook[0], new Recipe(recipeTestData[1]));
  });

  it('should be able to filter my recipes by name', () => {
    user.addRecipeToCook(recipeTestData[1]);
    user.findByName('Loaded Chocolate Chip Pudding Cookie Cups');
    assert.deepEqual(user.recipesToCook[0], new Recipe(recipeTestData[1]));
  });
});