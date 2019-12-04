const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/pantry.js');
const User = require('../src/user.js');

describe('Pantry', function() {

  let pantry, user1;

  beforeEach(() => {
    user1 = new User(1,'Saige O\'Kon', [11477, 1]);
    pantry = new Pantry(user1);
  });

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should instantiate a new pantry', function() {
    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('should hold an instanceof the user', function() {
      expect(pantry.user).to.equal(user1);
  });

  it.skip('should store the user and there pantry/ingredients', function() {
    expect(pantry.stockedIngredients).to.equal('array');
  });
  describe('canCookMeals', function() {

    it.skip('should have method canCookMeals return true if user CAN make meal', function() {
      expect(pantry.canCookMeals()).to.equal(true) // need happy&sad path
    });

    it.skip('should have method canCookMeals return false if the user CANNOT make the meal', function() {
      expect(pantry.canCookMeals()).to.equal(false);
    });

  });

  it('should have a method findIngredients in the pantry', function() {
    expect(pantry.findIngredients()).to.equal();
  });

  it('should have a method removeAfterCooking ingredients removed from pantry', function() {
    expect(pantry.removeAfterCooking()).to.equal();
  });

});
