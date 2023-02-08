import { assert, expect } from 'chai';
import User from '../src/classes/userClass';
import usersTestData from '../src/data/userTestData';

describe('User', () => {
  let user
  beforeEach(() => {
    user = new User();
  });

  it.skip('should be an instance of User', () => {
    assert.instanceOf(user, User);
  });

  it.skip('should be a function', () => {
    assert.isFunction(User);
  });

  it.skip('should have a recipe to cook list', () => {

  });

  it.skip('should be able to add or remove a recipe from their list', () => {

  });

  it.skip('should be able to filter my recipes by tag', () => {

  });

  it.skip('should be able to filter my recipes by name', () => {

  });
});