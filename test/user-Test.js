import { expect } from 'chai';
import usersData from '../src/data/users';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import sampleRecipeData from '../src/data/sampleRecipeData.js';
import Ingredient from '../src/classes/Ingredient';

describe('User', () => {
  let user, cookbook, recipeSample1, recipeSample2, recipeSample3, recipeSample4;
//   let users;
  beforeEach(() => {
    user = new User(usersData.usersData[0])
    recipeSample1 = new Recipe(sampleRecipeData[0]);
    recipeSample2 = new Recipe(sampleRecipeData[1]);
    recipeSample3 = new Recipe(sampleRecipeData[2]);
    recipeSample4 = new Recipe(sampleRecipeData[3]);
    // users = usersData.usersData
  })
  it('Should be a function', () => {
    // console.log(usersData.usersData[0])
    // user = new User(usersData.usersData[0])
    expect(User).to.be.a('function');
  });
  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User)
  })
  it('should have a name', () => {
    expect(user.name).to.equal("Saige O'Kon")
  })
  it('should have an ID', () => {
    expect(user.id).to.equal(1)
  })
  it('should be able to add favorite recipes', () => {
    user.addRecipeToFavorites(recipeSample1)
    user.addRecipeToFavorites(recipeSample2)
    user.addRecipeToFavorites(recipeSample3)
    user.addRecipeToFavorites(recipeSample4)
    expect(user.favoriteRecipeIds).to.deep.equal([recipeSample1, recipeSample2, recipeSample3, recipeSample4])
  })
  it.skip('should be able to remove favorite recipes', () => {
    user.addRecipeToFavorites(recipeSample1)
    user.addRecipeToFavorites(recipeSample2)
    user.addRecipeToFavorites(recipeSample3)
    user.addRecipeToFavorites(recipeSample4)
    user.removeRecipeToFavorites(recipeSample2)
    expect(user.favoriteRecipeIds).to.deep.equal([recipeSample1, recipeSample3, recipeSample4])
  })
  it.skip('should be able to add saved for later recipes', () => {
    user.addRecipeToFavorites(recipeSample1)
    user.addRecipeToFavorites(recipeSample2)
    user.addRecipeToFavorites(recipeSample3)
    expect(user.savedForLaterRecipeIds).to.deep.equal([recipeSample1, recipeSample2, recipeSample3])
  })
  it.skip('should be able to remove saved for later recipes', () => {
    user.addRecipeToFavorites(recipeSample1)
    user.addRecipeToFavorites(recipeSample2)
    user.addRecipeToFavorites(recipeSample3)
    user.removeRecipeToSavedForLater(recipeSample3)
    expect(user.savedForLaterRecipeIds).to.deep.equal([recipeSample1, recipeSample2])
  })
  it.skip('should be able to filter favorite recipes by tag', () => {
    user.addRecipeToFavorites(recipeSample1)
    user.addRecipeToFavorites(recipeSample3)
    user.addRecipeToFavorites(recipeSample4)
    expect(user.filterFavoriteRecipes('side dish')).to.deep.equal(user.favoriteRecipeIds[recipeSample3, recipeSample4])
  })
  it.skip('should be able to search recipes by ingredient', () => {
    user.addRecipeToFavorites(recipeSample1)
    user.addRecipeToFavorites(recipeSample3)
    user.addRecipeToFavorites(recipeSample4)
    expect(user.searchFavoriteRecipes('FRUIT')).to.deep.equal([recipeSample4])
  })
  it.skip('should be able to search recipes by name', () => {
    user.addRecipeToFavorites(recipeSample1)
    user.addRecipeToFavorites(recipeSample3)
    user.addRecipeToFavorites(recipeSample4)
    expect(user.searchFavoriteRecipes('Cake')).to.deep.equal([recipeSample3, recipeSample4])
  })
})
