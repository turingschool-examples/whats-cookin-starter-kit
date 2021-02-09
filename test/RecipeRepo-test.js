const chai = require('chai');
const expect = chai.expect;

const RecipeRepo = require('./RecipeRepo');
const Recipe = require('/.Recipe');

describe ('RecipeRepo', function() {

  beforeEach('create a recipe repository', {
    let recipeRepo = new RecipeRepo;
    
  })

  it('should instantiate a recipe repository') {
    expect(recipeRepo).to.be.an.instanceOf(RecipeRepo);
  };
  it('should fulfill the whole data set and have many Recipe ojects', {

  });
});
