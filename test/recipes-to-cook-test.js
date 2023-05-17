import { expect } from 'chai';
import { recipesToCook } from '../src/recipes-to-cook'
import { sampleUserData} from './sampleUsers'


describe('recipesToCook', () => {
  
  it('should be a fuction', () => {
    console.log(sampleUserData)
    expect(recipesToCook).to.be.a('function');
  });

});