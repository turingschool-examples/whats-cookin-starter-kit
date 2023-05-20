import { expect } from 'chai';
import { getRandomUser, getRandomIndex, checkUserForRecipe } from '../src/users'
import { sampleUserData } from './sampleUsers';
import { sampleRecipeData } from './sampleIngredients'
import { recipesToCook } from '../src/recipes-to-cook' 

describe('getRandomindex', () => {
  it('should be a function', () => {
    expect(getRandomIndex).to.be.a('function');
  });

  it('should return a number', () => {
    expect(getRandomIndex(sampleUserData.users.length)).to.be.a('number');
  });

  it('should return undefined if user info is not passed in', () => {
    expect(getRandomIndex()).to.be.NaN
  })
});

describe('getRandomUser', () => {
  it('should be a function', () => {
    expect(getRandomUser).to.be.a('function');
  });
  
  it('should return a user object', () => {
    expect(getRandomUser(sampleUserData)).to.have.key('id', 'name', 'recipesToCook');
  });

  it('should return undefined if no user data is passed in', () => {
    expect(getRandomUser()).to.equal('user data not found');
  });

describe('checkUserForRecipe', () => {
 
  it('should return true if user has saved recipe', () => {
    const user = sampleUserData.users[0]
    recipesToCook(101, user, sampleRecipeData)

    expect(checkUserForRecipe(user, sampleRecipeData[0])).to.be.true
    });
  });

  it('should return false if no recipes were found', () => {
    const user = sampleUserData.users[0]
    recipesToCook(102, user, sampleRecipeData)

    expect(checkUserForRecipe(user, sampleRecipeData[0])).to.be.false
  });
});
