const expect = require('chai').expect;

const Ingredient = require('../src/Ingredient');

describe('Ingredient', function() {

  let ingredient, ingredient2;
  beforeEach(function() {
    ingredient = new Ingredient(20081, 'wheat flour', 142);
    ingredient2 = new Ingredient(18372, 'bicarbonate of soda', 582);
  });

  it('should be a function', function() {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of Ingredient', function() {
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it('should have an id', function() {
    expect(ingredient.id).to.equal(20081);
  });

  it('should accept another id', function() {
    expect(ingredient2g.id).to.equal(18372);
  });

  it('should have a name', function() {
    expect(ingredient.name).to.equal('wheat flour');
  });

  it('should have another name', function() {
    expect(ingredient2.name).to.equal('bicarbonate of soda');
  });
  
  // instance
  // intialize
  // has id / different id
  // has name / different name
  // has estimatedCost / different cost

});
