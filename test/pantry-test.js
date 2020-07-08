const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/pantry-class');
const Recipe = require('../src/recipe-class')
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
        {id: 11477, amount: 5}, 
        {id: 11297, amount: 4}, 
        {id: 16069, amount: 1}
      ], 
      "name": "Grandma's Ham", 
      "tags": ["delicious", "terrifying"]
    });
    aPerfectEgg = new Recipe ({
      'id': 12283,
      'img': 'img',
      'ingredients': [
        { id: 11477, amount: 4 },
        { id: 11297, amount: 4 },
      ],
      "name": "A perfect egg",
      "tags": ["beautiful", "satisfying"]
    });
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');    
  });

  it('should hold a users ingredients', () => {
    expect(pantry.supplies).to.deep.equal(pantrySupply);
  });

  it('should only accept arrays as inputs', () => {
    badPantry = new Pantry('rotten eggs');
    expect(badPantry.supplies).to.deep.equal([]);
  });

  it('should only hold ingredients which are objects', () => {
    badPantry = new Pantry(['rotten eggs']);
    expect(badPantry.supplies).to.deep.equal([]);
  })

  it('it should only accept ingredients with a number value' +
  ' ingredient key', () => {
    badPantry = new Pantry([{ingredient:'rotten eggs'}]);
    expect(badPantry.supplies).to.deep.equal([]);
  });

  it('should only accept ingredients with ' + 
  'a number value amount key', () => {
    badPantry = new Pantry([{ ingredient: 123, amount: 'forty'}]);
    expect(badPantry.supplies).to.deep.equal([]);
  });

  it('it should be able to compare check if one ingredients "id" is ' + 
  'in another array of ingredients', () => {
    let isTrue = pantry.compareIngredients(pantrySupply[0], greenHam.requiredIngredients[0]);
    expect(isTrue).to.equal(true); 
    // undefined undefined
  });
  
  it('can compareIngredient IDs whether or not they\'re assigned to ' +
  '.id or .ingredient', () => {
    let isTrue = pantry.compareIngredients(greenHam.requiredIngredients[0], pantrySupply[0]);
    expect(isTrue).to.equal(true); 
    })

  it('should determine which ingredients a pantry has for a given recipe', () => {
    const requiredIngredientsInPantry = pantry.checkPantryForRecipeIngredients(greenHam);
    const expectedIngredients = [
      { ingredient: 11477, amount: 4 },
      { ingredient: 11297, amount: 4 },
    ];
    expect(requiredIngredientsInPantry).to.deep.equal(expectedIngredients);
  });

  it('should only check ingredients if the given recipe is a RECIPE', () => {
    const requiredIngredientsInPantry = pantry.checkPantryForRecipeIngredients(
      'choppedLiver'
    );
    const expectedIngredients = 'This is not a recipe'
    expect(requiredIngredientsInPantry).to.deep.equal(expectedIngredients);
  });

  it('can find just ingredient ids for a given recipe', () => {
    let recipeIngredientIds = pantry.findIngredientIds(greenHam);
    expect(recipeIngredientIds).to.deep.equal([11477, 11297, 16069]);
  });
  
  it('can find an ingredient\'s name from its Id', () => {
    let name = pantry.findIngredientName(16069);
    expect(name).to.equal('legumes');
  });

  it('won\'t search for IDs that aren\'t numbers', () => {
    let name = pantry.findIngredientName('legumes');
    expect(name).to.equal(undefined);
  })

  it('should know how many ingredients are needed to make a recipe', () => {
    let missingIngredients = pantry.findMissingIngredients(greenHam);
    expect(missingIngredients).to.equal('You still need 1 zucchini squash ' +
    'and 1 legumes to make Grandma\'s Ham')
  });

  it('won\'t check for missing ingredients if not provided with a recipe', () => {
    let missingIngredients = pantry.findMissingIngredients('rotten eggs');
    expect(missingIngredients).to.equal('This is not a recipe');
  })

  it('should know when a pantry has all the required ingredients', () => {
    let wellPreparedPantry = pantry.findMissingIngredients(aPerfectEgg);
    expect(wellPreparedPantry).to.equal('All the required ingredients are in the pantry');
  });

  it('should be able to use ingredients from the pantry', () => {
    pantry.useIngredients(aPerfectEgg);
    expect(pantry.supplies[0].amount).to.equal(0);
    expect(pantry.supplies[1].amount).to.equal(0);
  });
});