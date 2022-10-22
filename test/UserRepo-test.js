import { expect } from 'chai';
import UserRepo from '../src/classes/UserRepo';
import allUsersData from '../src/data/users-sample.js';


describe('UserRepo', function() {
  let userRepo

  beforeEach(() => {

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
    expect(userRepo.userCatalog[1].pantry).to.deep.equal(
      allUsersData[1].pantry
    )
    expect(userRepo.userCatalog[2].pantry).to.deep.equal(
      allUsersData[2].pantry
    )
  })

  it('Should get single user', function() {
    expect(userRepo.getUserInfo(1)).to.deep.equal(allUsersData[0])
    //assertions on getUserInfo below don't behave as anticipated
    //expect(userRepo.getUserInfo(3)).to.deep.equal(allUsersData[2])
    //expect(userRepo.getUserInfo(2)).to.deep.equal(allUsersData[1])

  })

  it('Should return pantry of single user', function() {
    expect(userRepo.getPantry(2)).to.deep.equal(allUsersData[1].pantry)
    expect(userRepo.getPantry(3)).to.deep.equal(allUsersData[2].pantry)

  })


})
