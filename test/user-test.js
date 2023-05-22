import { assert } from 'chai'
import { sampleRecipeData, sampleUsersData } from '../src/data/sampleData';
import {updateRecipesToCook} from '../src/users'

describe('users', () => {
  const saige = sampleUsersData[0];
  const ephriam = sampleUsersData[1];
  const cookies = sampleRecipeData[0];
  const porkChops = sampleRecipeData[1];
  const wingSauce = sampleRecipeData[2];
  let newSaige, newerSaige, newEphriam, newerEphriam; 
  beforeEach(() => {
    newSaige = updateRecipesToCook(saige, cookies, 'add'); 
    newerSaige = updateRecipesToCook(newSaige, porkChops, 'add');
    newEphriam = updateRecipesToCook(ephriam, porkChops, 'add');
    newerEphriam = updateRecipesToCook(newEphriam, cookies, 'add');
  })
  it('should be a function', () => {
    assert.isFunction(updateRecipesToCook)
  })

  it('should be able to add recipes to cook', () => {
    assert.deepEqual(newSaige.recipesToCook, [cookies])
    assert.deepEqual(newEphriam.recipesToCook, [porkChops])
  })

  it('should only add unique recipes to cook', () => {
    newerSaige = updateRecipesToCook(newSaige, cookies, 'add');
    newerEphriam = updateRecipesToCook(newEphriam, porkChops, 'add');

    assert.deepEqual(newerSaige.recipesToCook, [cookies])
    assert.deepEqual(newerEphriam.recipesToCook, [porkChops])
  })

  it('should add more unique recipes to cook', () => {
    assert.deepEqual(newerSaige.recipesToCook, [cookies, porkChops])
    assert.deepEqual(newerEphriam.recipesToCook, [porkChops, cookies])
  })

  it('should remove recipes to cook', () => {
    let ephriamWithoutCookies = updateRecipesToCook(newerEphriam, cookies, 'remove')
    let ephriamWithoutRecipes = updateRecipesToCook(ephriamWithoutCookies, porkChops, 'remove')

    assert.deepEqual(ephriamWithoutCookies.recipesToCook, [porkChops])
    assert.deepEqual(ephriamWithoutRecipes.recipesToCook, [])
  })

  it('should only remove present recipes', () => {
    assert.deepEqual(newerEphriam.recipesToCook, [porkChops, cookies])

    let updatedEphriam = updateRecipesToCook(newerEphriam, wingSauce, 'remove')
    assert.deepEqual(updatedEphriam.recipesToCook, [porkChops, cookies])
  })
})
