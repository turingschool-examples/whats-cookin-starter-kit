import { assert } from 'chai'
import { sampleRecipeData, sampleUsersData } from '../src/data/sampleData';
import {addRecipeToCook} from '../src/users'

describe('users', () => {
  const saige = sampleUsersData[0];
  const ephriam = sampleUsersData[1];
  const cookies = sampleRecipeData[0];
  const porkChops = sampleRecipeData[1];
  let newSaige, newerSaige, newEphriam, newerEphriam; 
  beforeEach(() => {
    newSaige = addRecipeToCook(saige, cookies); 
    newerSaige = addRecipeToCook(newSaige, porkChops);
    newEphriam = addRecipeToCook(ephriam, porkChops);
    newerEphriam = addRecipeToCook(newEphriam, cookies);
  })
  it('should be a function', () => {
    assert.isFunction(addRecipeToCook)
  })

  it('should be able to add recipes to cook', () => {
    assert.deepEqual(newSaige.recipesToCook, [cookies])
    assert.deepEqual(newEphriam.recipesToCook, [porkChops])
  })

  it('should only add unique recipes to cook', () => {
    newerSaige = addRecipeToCook(newSaige, cookies);
    newerEphriam = addRecipeToCook(newEphriam, porkChops);

    assert.deepEqual(newerSaige.recipesToCook, [cookies])
    assert.deepEqual(newerEphriam.recipesToCook, [porkChops])
  })

  it('should add more unique recipes to cook', () => {
    assert.deepEqual(newerSaige.recipesToCook, [cookies, porkChops])
    assert.deepEqual(newerEphriam.recipesToCook, [porkChops, cookies])
  })
})
