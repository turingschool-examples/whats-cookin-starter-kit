const chai = require('chai');
const expect = chai.expect;

let users = require('../data/users');
let ingredients = require('../data/ingredients');
let recipes = require('../data/recipes');

const Ingredient = require('../src/Ingredient');
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');
const User = require('../src/User');

describe ('User', function() {

  let user;

  beforeEach(function() {
     user = new User(users[0].name, users[0].id, users[0].pantry);

  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of pantry', function() {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have a name', function() {
    expect(user.name).to.equal('Saige O\'Kon');
  });

  it('should have an id', function() {
    expect(user.id).to.equal(1);
  });

  it('should have a pantry', function() {
    expect(user.pantry[0].ingredient).to.equal(11477);
    expect(user.pantry[2].ingredient).to.equal(1082047);
  });

  it('should be able to check pantry', function() {
    expect(user.checkPantry(recipes[0])).to.be.an('array')
  })

})
