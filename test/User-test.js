const chai = require('chai');
const expect = chai.expect;
const data = require('../data/helper-data.js')

const User = require('../src/User')
const Ingredient = require('../src/Ingredient.js');

describe('User', () => {

  it('should accept userData and an Ingredients array to instantiate a new User object', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    expect(user).to.be.an.instanceof(User)
    expect(user.pantry[0]).to.be.an.instanceof(Ingredient);
  })

})