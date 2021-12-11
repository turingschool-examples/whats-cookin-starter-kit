import { expect } from 'chai';
import usersData from '../src/data/users';
import User from '../src/classes/User';


describe('User', () => {
  let user;
//   let users;
  beforeEach(() => {
    user = new User(usersData.usersData[0])
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
    user.addRecipeToFavorites(5468)
    expect(user.favoriteRecipeIds).to.deep.equal([5468])
  })
  it('should be able to remove favorite recipes', () => {
    user.addRecipeToFavorites(5468)
    user.removeRecipeToFavorites(5468)
    expect(user.favoriteRecipeIds).to.deep.equal([])
  })
  it('should be able to add saved for later recipes', () => {
    user.addRecipeToSavedForLater(5468)
    expect(user.savedForLaterRecipeIds).to.deep.equal([5468])
  })
  it('should be able to remove saved for later recipes', () => {
    user.addRecipeToSavedForLater(5468)
    user.removeRecipeToSavedForLater(5468)
    expect(user.savedForLaterRecipeIds).to.deep.equal([])
  })
  it.only('should be able to filter favorite recipes by tag', () => {
    expect(user.filterFavoriteRecipes('main course')).to.deep.equal(user.favoriteRecipeIds[5468, 2389, 2452])
  })
  it('should be able to search recipes by keyword', () => {
    expect(user.searchFavoriteRecipes('SUGAR')).to.deep.equal([5435, 3453, 5467])
  })
})
