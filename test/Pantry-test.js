import { expect } from 'chai';
import Pantry from '../src/classes/Pantry.js';
import Recipe from '../src/classes/Recipe.js';
import User from '../src/classes/User.js';
const data = require('../src/data/recipes.js');
const data1 = require('../src/data/ingredients.js');
const data2 = require('../src/data/users.js');
const testRecipeData = data.testRecipeData;
const testIngData = data1.testIngredients;
const testUserData = data2.testUserData;

describe('Pantry', () => {
    let recipe1;
    let recipe2;
    let user1;
    let user2;
    let pantry1; 
    let emptyPantry;
    let ingredientId1;
    let ingredientId2;

    beforeEach(() => {
     user1 = new User(testUserData[0]);
     user2 = new User(testUserData[1]);
     emptyPantry = new Pantry()
     pantry1 = new Pantry(user1.pantry)
     recipe1 = new Recipe(testRecipeData[0], testIngData);
     recipe2 = new Recipe(testRecipeData[1], testIngData);
     ingredientId1 = 0;
     ingredientId2 = 0;
    })

    it('should create a new instance of Pantry', () => {
        expect(pantry1).to.be.an.instanceOf(Pantry)
    })

    it()
})