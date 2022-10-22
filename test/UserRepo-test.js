import { expect } from 'chai';
import UserRepo from '../src/classes/UserRepo';
import allUsers from '../src/data/users-sample.js'

describe('UserRepo', function() {
  let userRepo, user1, user2, user3, allUsers
  beforeEach(() => {
   userRepo = new UserRepo(allUsers)
  })
  it('Should be a function', function() {
    expect(UserRepo).to.be.a('function')
  })

})
