import chai from 'chai';
const expect = chai.expect;
import Pantry from '../src/classes/Pantry';
import userData from './Pantry-test-data';
import User from '../src/classes/User';

describe('Pantry', () => {
 let user;
 let fancyPantry;

  beforeEach(() => {
  user = new User(userData);
  fancyPantry = new Pantry(user);
  user.pantry = fancyPantry;

  });

  it('should return true', function() {
    console.log(user)
    expect(true).to.equal(true);
  });
});
