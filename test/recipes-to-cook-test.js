import { expect } from 'chai';
import { recipesToCook } from '../src/recipes-to-cook'
import { sampleUserData} from './sampleUsers'


describe('recipesToCook', () => {
  it('should be a fuction', () => {
    expect(recipesToCook).to.be.a('function');
  });

  let currentUser = {
    id: 1,
    name: "Sadye Welch",
    recipesToCook: []
  }
  console.log(currentUser)
  it('should be place bookmarked recipes into the recipesToCook array for current user', () => {
    expect(recipesToCook).to.be.a('function');
  });
});

//we need to have current suer and assign it to a user
//we can expect the recipes to cook to deep
//equal an array of recipe numbers
//sad path: ? no event.target so undefined
//removeREcips = test array length or a deep equal
//sadpath