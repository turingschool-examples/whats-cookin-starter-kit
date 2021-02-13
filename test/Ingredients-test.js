const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Recipe = require('../src/Recipe');
const Ingredient = require('../src/Ingredient');
const data = require('../data/helper-data.js');



describe('Ingredient', () => {
  
  it("should accept an id and quantity from a recipe, and match it to the correct element in the ingredients array", () => {
    let ingredient = new Ingredient(data.recipeData[0].ingredients[0].id, data.recipeData[0].ingredients[0].quantity, data.ingredientsData)
    let recipe = new Recipe(data.recipeData[0], data.ingredientsData)

    expect(recipe.ingredients[0]).to.be.an.instanceof(Ingredient)
    expect(ingredient).to.deep.equal(recipe.ingredients[0]);
  })

  it("should accept an id and quantity from a users pantry, and match it to the correct element in the ingredients array", () => {
    let ingredient = new Ingredient(data.usersData[0].pantry[0].ingredient, data.usersData[0].pantry[0].amount, data.ingredientsData);
    let user = new User(data.usersData[0], data.ingredientsData)

    expect(user.pantry[0]).to.be.an.instanceof(Ingredient)
    expect(ingredient).to.deep.equal(user.pantry[0]);
  })

  it("id should indicate 'unknown ingredient' if the argument is null or undefined" , () => {
    let ingredient = new Ingredient(null, 3, data.ingredientsData);

    expect(ingredient.id).to.deep.equal('unknown ingredient');
  })

  it("name and estimated cost should indicate 'uknown ingredient' if the id could not be found in the array", () => {
    let ingredient = new Ingredient(845968459, 3, data.ingredientsData);

    expect(ingredient.name).to.deep.equal('unknown ingredient');
    expect(ingredient.estimatedCost).to.deep.equal('unknown ingredient');
  })

  it("quantity should indicate 'uknonwn quantity' if the supplied argument is null, undefined or not an object", () => {
    let ingredient = new Ingredient(data.recipeData[0], null, data.ingredientsData);

    expect(ingredient.quantity).to.deep.equal('unknown quantity');
  })

})