const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/pantry');
const Recipe = require('../src/recipe')
const usersData = require('../data/users.js');

describe('Pantry', () => {
  let pantry, pantrySupply, badPantry, greenHam;

  beforeEach(() => {
    pantrySupply = usersData[0].pantry;
    pantry = new Pantry(pantrySupply);
    greenHam = new Recipe({
      'id': 12283, 
      'img':'img', 
      'ingredients':[
        {ingredient: 11477, amount: 5}, 
        {ingredient: 11297, amount: 4}, 
        {ingredient: 0, amount: 1}
      ], 
      "name": "Grandma's Ham", 
      "tags": ["delicious", "terrifying"]
    });
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');    
  });

  it('should hold a users ingredients', () => {
    expect(pantry.ingredients).to.deep.equal(pantrySupply);
  });

  it('should only accept arrays as inputs', () => {
    badPantry = new Pantry('rotten eggs');
    expect(badPantry.ingredients).to.deep.equal([]);
  });

  it('should only hold ingredients which are objects', () => {
    badPantry = new Pantry(['rotten eggs']);
    expect(badPantry.ingredients).to.deep.equal([]);
  })

  it('it should only accept ingredients with a number value' +
  ' ingredient key', () => {
    badPantry = new Pantry([{ingredient:'rotten eggs'}]);
    expect(badPantry.ingredients).to.deep.equal([]);
  });

  it('it should only accept ingredients with ' + 
  'a number value amount key', () => {
    badPantry = new Pantry([{ ingredient: 123, amount: 'forty'}]);
    expect(badPantry.ingredients).to.deep.equal([]);
  });

  it('it should be able to compare check if one ingredients "id" is ' + 
  'in another array of ingredients', () => {
    let isTrue = pantry.compareIngredients(pantrySupply[0], greenHam.ingredients[0]);
    expect(isTrue).to.equal(true); 
  });

  it('should determine which ingredients a pantry has for a given recipe', () => {
    const requiredIngredientsInPantry = pantry.checkPantryForRecipeIngredients(greenHam);
    const expectedIngredients = [
      { ingredient: 11477, amount: 4 },
      { ingredient: 11297, amount: 4 },
    ];
    expect(requiredIngredientsInPantry).to.deep.equal(expectedIngredients);
  });
});