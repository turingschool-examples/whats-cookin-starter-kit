const chai = require("chai");
const expect = chai.expect;
let user;

const Users = require("../src/scripts/Users");
const userData = require("../data/users");

beforeEach(() => {
  user = new Users(userData[0]);
})

describe ('Users', () => {

  it('should be a function', () => {
    expect(Users).to.be.a('function');
  })

  it('should be an instance of a User', () => {
    expect(user).to.be.an.instanceof(Users);
  })

  it('should have a unique id', () => {
    expect(user.id).to.equal(userData[0].id);
  })

  it('should have the name', () => {
    expect(user.name).to.equal(userData[0].name);
  })

  it('should have a pantry of available ingredients', () => {
    expect(user.pantry).to.deep.equal(userData[0].pantry);
  })

  it('should have a list of favorite recipes', () => {
    expect(user.favoriteRecipes).to.deep.equal([]);
  })

  it('should be able to add a recipe to the favorites list', () => {
    user.addFavoriteRecipe(3456);
    expect(user.favoriteRecipes).to.deep.equal([3456]);
  })

  it('should have a list of current recipes', () => {
    expect(user.currentRecipes).to.deep.equal([]);
  })

  it('should be able to add a recipe to the favorites list', () => {
    user.addCurrentRecipe(3456);
    expect(user.currentRecipes).to.deep.equal([3456]);
  })
});
