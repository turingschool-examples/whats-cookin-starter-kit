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
  })
  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

})