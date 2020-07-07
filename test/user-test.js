const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user-class.js');
const Pantry = require('../src/pantry.js');
const usersData = require('../data/users.js');

describe('user', () => {

  let user;

  beforeEach(() => {
    user = new User(usersData[0]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should have a name', () => {
    expect(user.name).to.be.a('string');
    expect(user.name).to.deep.equal(usersData[0].name);
  });

  it('should only have a string as a name', () => {
    const robotChef = new User({name: 12567, id: 1, pantry: []});
    expect(robotChef.name).to.equal('12567');
  });

  it('should have an ID', () => {
    expect(user.id).to.be.a('number');
    expect(user.id).to.deep.equal(usersData[0].id);
  });

  it('should assign a number for an ID if no number is given', () => {
    const karen = new User({name: 'Karen', id: 'I don\'t believe in numbers', pantry: [{ingredient: 'essential oils'}]});
    const anotherRobotChef = new User({ name: 12567, id: ['Error'], pantry: []});

    expect(karen.id).to.equal(Date.now());
    expect(anotherRobotChef.id).to.equal(Date.now());
  });

  it('should have a pantry that contains ingredients', () => {
    expect(user.pantry).to.be.an('object');
    expect(user.pantry).to.deep.equal(new Pantry(usersData[0].pantry));
  });

  it('should have a pantry that is an instance of Pantry', () => {
    expect(user.pantry).to.be.an.instanceOf(Pantry);
  });

  it('should start with an empty array of favorite recipes', () => {
    expect(user.favoriteRecipes).to.be.an('array');
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should start with an empty array of recipes to cook', () => {
    expect(user.recipesToCook).to.be.an('array');
    expect(user.recipesToCook).to.deep.equal([]);
  });
});