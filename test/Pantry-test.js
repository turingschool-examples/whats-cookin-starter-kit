const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');
const User = require('../src/User');
const Recipe = require('../src/Recipe');
const recipes = require('../data/recipes');
const users = require('../data/users');

describe('Pantry', () => {
  let userPantry;
  let user;
  

  beforeEach(function () {
    user = new User(users[2]);
    recipe1 = new Recipe(recipes[2]);
    recipe2 = new Recipe(recipes[3]);
    user.addRecipeToCook(recipe2);
    userPantry = new Pantry(user);
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });
  
  it('should be an instance of Card', () => {
    expect(userPantry).to.be.an.instanceof(Pantry);
  });
  
  it('should have a pantry property with an array of a users pantry', () => {
    expect(userPantry.pantry).to.be.an('array').with.a.lengthOf(50);
  });

  it('should store an instance of recipe we want to make', () => {
    expect(userPantry.recipe[0]).to.be.an.instanceof(Recipe);
  });

  it('should be able to check if user has enough ingredients to make recipe', () => {
    expect(userPantry.checkPantry(recipe1)).to.deep.equal(false);
  });

  it('should return false if user does not have all ingredients to make recipe', () => {
    expect(userPantry.checkPantry(recipe2)).to.deep.equal(true);
  });

  it('should return undefined if invalid information passed in', () => {
    expect(() => userPantry.checkPantry(test)).to.throw(ReferenceError, /test is not defined/);
  });

  it('should have an array of needed ingredients that is empty by default', () => {
    expect(userPantry.shoppingList).to.be.an('array').with.a.lengthOf(0);
  });

  it('should list additional ingredients user needs to make recipe', () => {
    userPantry.checkPantry(recipe1);
    expect(userPantry.shoppingList).to.be.an('array').with.a.lengthOf(8);
  });

  // it.skip('should check if pantry ingrendient amount is enough to make recipe for each ingredient'{

  // });

  // it.skip('should adjust recipe ammount if pantry has some ingredient but not enough' {

  // });

  // it.skip('should adjust pantry if recipe is cooked and reduce pantry.ingredient.amount appropriatlly'{

  // })

  
});

