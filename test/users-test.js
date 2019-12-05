const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user.js')

describe('User', () => {
  let users

  beforeEach(() => {
      user = new User(1, "Saige O\'Kon", [
        { "ingredient": 11477, "amount": 1},
        { "ingredient": 93820, "amount": 1}
      ]);
    });

    it('should be an instance of User', () => {
      expect(user).to.be.an.instanceOf(User)
    });

    it('should have an id property', () => {
      expect(user.id).to.equal(1)
    });

    it('should have a name property', () => {
      expect(user.name).to.equal('Saige O\'Kon')
    });

    it('should have a pantry with ingredients', () => {
      expect(user.pantry).to.eql([
        { "ingredient": 11477, "amount": 1},
        { "ingredient": 93820, "amount": 1}
      ])
    });

    it('should have no favorite recipes by default', () => {
      expect(user.favoriteRecipes).to.eql([])
    });

    it('should have no recipes to cook by default', () => {
      expect(user.favoriteRecipes).to.eql([])
    });
})
