const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');
const Ingredient = require('../src/Ingredient');
const Recipe = require('../src/Recipe');
const User = require('../src/User');

describe ('Pantry', function() {
  let recipe;
  let ingredient1;
  let ingredient2;

  beforeEach(function() {
    ingredient1 = new Ingredient(20081, 'wheat flour', 142);
    ingredient2 = new Ingredient(18372, "bicarbonate of soda", 582);
    pantry = new Pantry([ingredient1, ingredient2])

  })

  it('should be an instance of pantry', function() {
    expect(pantry).to.be.an.instanceOf(Pantry);
  });

  it('should be able to have multiple ingredients', function() {
    expect(pantry.ingredients).to.be.an('array');
  });

  it('should have ingredients', function() {
    expect(pantry.ingredients).to.deep.equal([ingredient1, ingredient2]);
  });

  it('should return an ingredient\'s quantity', function() {
    expect(pantry.getQuantity).to.be.a('function');
    expect(pantry.getQuantity(ingredient1)).to.equal(10);
  });

  it('should be able to check pantry for ingredients', function() {
    expect(pantry.measureIngredients).to.be.a('function');
  });

  it('should return whether there are enough ingredients in pantry', function() {
    let recipe = new Recipe(
      1001,
      'https://images.com',
      [{ingredient1}, {ingredient2}],
      [{'instruction': 'open', 'number': 1}, {'instruction': 'heat'}, {'number': 2}],
      'Basic Food',
      ['dinner', 'lunch']
    );

    expect(pantry.measureIngredients(recipe)).to.equal('So glad I got it!');
  })

})

/*{
  "id": 1017,
  "name": "cream cheese",
  "estimatedCostInCents": 955
},

{
  "id": 18371,
  "name": "baking powder",
  "estimatedCostInCents": 346
},

{
  "id": 1001,
  "name": "butter",
  "estimatedCostInCents": 618
},

{
  "id": 99223,
  "name": "canned chipotle chilies in adobo",
  "estimatedCostInCents": 299
},

{
  "id": 1230,
  "name": "buttermilk",
  "estimatedCostInCents": 773
},

{
  "id": 9152,
  "name": "lemon juice",
  "estimatedCostInCents": 274
}, */
