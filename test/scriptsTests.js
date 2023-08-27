// import { expect } from 'chai';
// import { assert } from 'chai';
const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;
const { findNumber } = require('../test/untestedFunctions.js');

describe('findNumber', () => {
  it.skip('Should be a function', () => {
    expect(findNumber).to.be.a('function');
  });
})