const chai = require('chai');
const expect = chai.expect;
import {findRecipe} from '../src/recipe-functions'


describe('findRecipe', () => {
  let recipeData;
  beforeEach(() => {
    recipeData = [
      {
        "id": 741603,
        "name": "Elvis Pancakes",
        "tags": ["side dish", "dinner"]
      },
      {
        "id": 595736,
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "tags": ["antipasti", "starter", "snack", "appetizer", "antipasto", "hor d'oeuvre"]
      },
      {
        "id": 678353,
        "name": "Maple Dijon Apple Cider Grilled Pork Chops",
        "tags": ["lunch", "main course", "main dish", "snack"]
      }
    ];
  });

  it('Should return an array of one object containing a certain tag', () => {
    const dinnerRecipes = findRecipe("tags", recipeData, "dinner");
    expect(dinnerRecipes).to.deep.equal([recipeData[0]]);
  });
  it('Should return an array of one object containing a certain tag', () => {
    const dinnerRecipes = findRecipe("tags", recipeData, "dinner");
    expect(dinnerRecipes).to.deep.equal([recipeData[0]]);
  });

  it('Should return an array of more than one object containing a certain tag', () => {
    const snackRecipes = findRecipe("tags", recipeData, "snack");
    expect(snackRecipes).to.deep.equal([recipeData[1], recipeData[2]]);
  });

  it('Should return empty array if no tag match', () => {
    const beepRecipes = findRecipe("tags", recipeData, "beep");
    expect(beepRecipes).to.deep.equal([]);
  });

  it('Should return a specific recipe object in an array for exact search match', () => {
    const elvisPancakes = findRecipe("name", recipeData, "Elvis Pancakes");
    expect(elvisPancakes).to.deep.equal([recipeData[0]]);
  });

  it('Should return a specific recipe object in an array for a partial search match', () => {
    const elvisPartial = findRecipe("name", recipeData, "Elvis P");
    expect(elvisPartial).to.deep.equal([recipeData[0]]);
  });

  it('Should return a specific recipe object in an array for a partial search match that is not case sensitive', () => {
    const elvisCaseInsensitive = findRecipe("name", recipeData, "ELVIS P");
    expect(elvisCaseInsensitive).to.deep.equal([recipeData[0]]);
  });

  it('Should return empty array if no search match', () => {
    const elvrPancake = findRecipe("name", recipeData, "Elvr Pancake");
    expect(elvrPancake).to.deep.equal([]);
  });

  it('Should return an empty array if the search term is an empty string', () => {
    const emptySearch = findRecipe("name", recipeData, "");
    expect(emptySearch).to.deep.equal([]);
  });
});









