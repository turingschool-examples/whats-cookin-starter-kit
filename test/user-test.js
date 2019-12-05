const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user.js');

describe('Users', function() {

  beforeEach(() => {
      user = new User(1,'Saige O\'Kon', [11477, 1]);
    });

    it('should be a function', function() {
      expect(User).to.be.a('function');
    });

    it('should instantiate a new user', function() {
      expect(user).to.be.an.instanceof(User);
    });

    describe('stored data', function() {
      it('should know the correct ID number', function() {
        expect(user.id).to.equal(1);
      });

      it('should know what it has in the pantry', function() {
        expect(user.pantry).to.deep.equal([11477, 1]);
      });

      it('should know the correct name', function() {
        expect(user.name).to.equal('Saige O\'Kon');
      });

      it.skip('should know what it can cook', function() {
        expect(user.saveToFavorites()).to.equal();
      });

      it.skip('should be able to sort by recipes can cook', function() {
        expect(user.recipesToCook()).to.deep.equal();
      });

      it.skip('should be able to search by tags', function() {
        expect(user.searchByTags()).to.deep.equal();
      });

    });

    it('should store favorite recipe by id numbers', function() {
      user.saveToFavorites();
      expect(user.favorites[0].id).to.equal(595736);
    });
});
