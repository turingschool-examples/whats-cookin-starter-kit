import { assert } from 'chai'
import { sampleRecipeData, sampleUsersData } from '../src/data/sampleData';
import {addRecipeToCook} from '../src/users'

describe('users', () => {
  const saige = sampleUsersData[0];
  const ephriam = sampleUsersData[1];
  const cookies = sampleRecipeData[0];
  const porkChops = sampleRecipeData[1];
  it('should be a function', () => {
    assert.isFunction(addRecipeToCook)
  })
  it('should be able to add recipes to cook', () => {
    let newSaige = addRecipeToCook(saige, cookies); 
    let newEphriam = addRecipeToCook(ephriam, porkChops);

    assert.deepEqual(newSaige.recipesToCook, [cookies])
    assert.deepEqual(newEphriam.recipesToCook, [porkChops])
  })
  it('should only add unique recipes to cook', () => {
    let newSaige = addRecipeToCook(saige, cookies); 
    let newerSaige = addRecipeToCook(newSaige, cookies);
    let newEphriam = addRecipeToCook(ephriam, porkChops);
    let newerEphriam = addRecipeToCook(newEphriam, porkChops);

    assert.deepEqual(newerSaige.recipesToCook, [cookies])
    assert.deepEqual(newerEphriam.recipesToCook, [porkChops])
  })
  it('should add more unique recipes to cook', () => {
    let newSaige = addRecipeToCook(saige, cookies); 
    let newerSaige = addRecipeToCook(newSaige, porkChops);
    let newEphriam = addRecipeToCook(ephriam, porkChops);
    let newerEphriam = addRecipeToCook(newEphriam, cookies);

    assert.deepEqual(newerSaige.recipesToCook, [cookies, porkChops])
    assert.deepEqual(newerEphriam.recipesToCook, [porkChops, cookies])
  })
})