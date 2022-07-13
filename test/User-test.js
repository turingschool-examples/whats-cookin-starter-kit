import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
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
    user1 = new User();
    user2 = new User();

    recipe = new Recipe(testRecipeData[0], testIngData);
    recipe2 = new Recipe(testRecipeData[1], testIngData);
    recipe3 = new Recipe(testRecipeData[2], testIngData);
  });
