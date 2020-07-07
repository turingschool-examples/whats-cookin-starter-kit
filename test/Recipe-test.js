const chai = require('chai');
const expect = chai.expect

const Recipe = require('../src/Recipe');

describe('Recipe', function() {
  let id, image, ingredient1, ingredient2, ingredients, instruction1, instruction2, instructions, name, tags, recipe;
  before(function() {
    id = 1
    image = 'https://en.wikipedia.org/wiki/Smiley#/media/File:SNice.svg';
    ingredient1 = {
      id: 5, 
      quantity: {
        amount: 1,
        unit: 'cup'
      }
    };
    ingredient2 = {
      id: 8,
      quantity: {
        amount: 10,
        unit: 'gallon'
      }
    };
    ingredients = [ingredient1, ingredient2];
    instruction1 = {instruction: 'Buy store-bought cookies.', number: 1};
    instruction2 = {instruction: 'Say you made them from scratch.', number: 2};
    instructions = [instruction1, instruction2];
    name = 'Funfetti Cookies';
    tags = ['dessert', 'breakfast']; 
    recipe = new Recipe(id, image, ingredients, instructions, name, tags);
  });
  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should have an id', function() {
    expect(recipe.id).to.equal(id);
  });

//Add sad path test for if non-number is passed in as id
//should function return 'Please enter a valid id'?
//same for all other properties 

  it('should have an image', function() {
    expect(recipe.image).to.equal(image); 
  });

  it('should have ingredients', function() {
    expect(recipe.ingredients).to.deep.equal(ingredients);
  });

  it('should have instructions', function() {
    expect(recipe.instructions).to.deep.equal(instructions)
  });

  it('should have a name', function() {
    expect(recipe.name).to.equal(name);
  });

  it('should have category tags', function() {
    expect(recipe.tags).to.deep.equal(tags); 
  }); 

  it('should contain a key that maps categories to their corresponding tags', function() {
    const categoryToTagMap = {
      AppetizersSnacks: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', 'hor d\'oeuvre'],
      Entree: ['lunch', 'main course', 'main dish', 'dinner'],
      SaucesDips: ['sauce', 'condiment', 'dip', 'spread'],
      SideDish: ['side dish'],
      Breakfast: ['morning meal', 'brunch', 'breakfast'],
      Salad: ['salad'],
      Other: ['other']
    }
    expect(recipe.categoryToTagMap.AppetizersSnacks).to.deep.equal(['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', 'hor d\'oeuvre'])
  });

  it('should default to a tag of other if no tag is passed in', function() {
    const recipe2 = new Recipe(id, image, ingredients, instructions, name);
    
    expect(recipe2.tags).to.deep.equal(['other']);
  });

  it('should default to a tag of other if an empty tag array is passed in', function () {
    const tags2 = [];
    const recipe2 = new Recipe(id, image, ingredients, instructions, name, tags2);

    expect(recipe2.tags).to.deep.equal(['other']);
  })

})