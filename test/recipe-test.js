const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/Ingredient');
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');
const User = require('../src/User');

describe ('Recipe', function() {

  let recipe;
  let ingredient1;
  let ingredient2; 

  beforeEach(function() {

    ingredient1 = new Ingredient(101, 'bread', 254);
    ingredient2 = new Ingredient(102, 'peanut butter', 236)

    recipe = new Recipe(
      1001, 
      'https://images.com', 
      [ingredient1, ingredient2], 
      [{'instruction': 'open', 'number': 1}, {'instruction': 'heat'}, {'number': 2}], 
      'Basic Food', 
      ['dinner', 'lunch']
    );

  })

  it('should be instantiated', function() {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });
  
  it('should have an id number', function() {
    expect(recipe.id).to.equal(1001);
  });
  
  it('should have an image of the recipe', function() {
    expect(recipe.image).to.equal('https://images.com');
  });
  
  it('should have a list of ingredients', function() {
    expect(recipe.ingredients[0].id).to.equal(101);
    expect(recipe.ingredients[1].name).to.equal('peanut butter');
    expect(recipe.ingredients).to.deep.equal([ingredient1, ingredient2]);
  });
  
  it('should have instructions on how to make the recipe', function() {
    expect(recipe.instructions).to.deep.equal(
      [{'instruction': 'open', 'number': 1}, {'instruction': 'heat'}, {'number': 2}], 
    )
  });
  
  it('should have a name of the recipe', function() {
    expect(recipe.name).to.equal('Basic Food');
  });

  it('should have tags describing the type of recipe', function() {
    expect(recipe.tags).to.deep.equal(['dinner', 'lunch']);
  });

  it('should be able to get a total cost of all ingredients in dollars and cents', function(){
    expect(recipe.getIngredientsCost()).to.equal('$4.90')
  })

  it('should be able to be marked "favorite" ', function() {
    expect(recipe.isFavorite).to.equal(false);
    recipe.toggleFavorite();
    expect(recipe.isFavorite).to.equal(true);
    recipe.toggleFavorite();
    expect(recipe.isFavorite).to.equal(false);
  })

  it('should be able to be marked "cook next" ', function() {
    expect(recipe.cookNext).to.equal(false);
    recipe.toggleCookNext();
    expect(recipe.cookNext).to.equal(true);
    
    recipe.toggleCookNext();
    expect(recipe.cookNext).to.equal(false);
  })
});