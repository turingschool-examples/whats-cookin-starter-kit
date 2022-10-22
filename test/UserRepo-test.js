import { expect } from 'chai';
import UserRepo from '../src/classes/UserRepo';
import allUsersData from '../src/data/users-sample.js';
//let allUsers
console.log(allUsersData)

describe('UserRepo', function() {
  let userRepo, user1, user2, user3, allUsers

  beforeEach(() => {
console.log(allUsersData)
    userRepo = new UserRepo(allUsersData)
  })

  it('Should be a function', function() {

    expect(UserRepo).to.be.a('function')
  })

  it('Should contain all users information', function() {
    expect(userRepo.userCatalog[0].id).to.equal(1)
    expect(userRepo.userCatalog[1].name).to.equal('Ephraim Goyette')
  })

  it('Should be able to access pantry items', function() {
  //  console.log('pantry:', userRepo.userCatalog[1].pantry)
    expect(userRepo.userCatalog[1].pantry).to.deep.equal(
      allUsersData[1].pantry
    )
  })

  it.skip('Should make pantry items easier to access', function() {
     userRepo.getPantry()
  })

})
