import chai from 'chai';
const expect = chai.expect;
import Pantry from '../src/classes/Pantry';
import userData from '../src/test-data/Pantry-test-data';
import User from '../src/classes/User';
import recipe from '../src/test-data/Recipe-data';

describe('Pantry describe block', () => {
 let user;
 let fancyPantry;

  beforeEach(() => {
  user = new User(userData);
  fancyPantry = new Pantry(user);
  user.pantry = fancyPantry;

  });

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should have a pantry', function() {
    expect(fancyPantry.pantry).to.deep.equal(userData.pantry);
  });

  it('should push missing ingredients to missingIngredients array', function() {
    expect(fancyPantry.checkIngredients(recipe)).to.deep.equal([
        { id: 19334, quantity: { amount: 0.5, unit: 'c' } },
        { id: 1012047, quantity: { amount: 24, unit: 'servings' } },
        { id: 10019903, quantity: { amount: 2, unit: 'c' } }
      ]);
  });

  it.only('should push insufficient amount ingredients to missingIngredients array', function() {
    // console.log(fancyPantry.checkIngredients(recipe))
    expect(fancyPantry.checkIngredients(recipe)).to.deep.equal([
        { id: 19334, quantity: { amount: 0.5, unit: 'c' } },
        { id: 1012047, quantity: { amount: 24, unit: 'servings' } },
        { id: 10019903, quantity: { amount: 2, unit: 'c' } }
      ]);
  });




});
