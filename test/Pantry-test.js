/* eslint-disable */
const chai = require('chai');

const expect = chai.expect;
var Pantry = require('../src/Pantry')
// var User = require('../src/User')

describe('Pantry', function () {
  let pantry;
  beforeEach(function() {
    pantry = new Pantry();
  });

  it('should be a function', function () {
    expect(Pantry).to.be.a('function');
});

it('should be an instance of Pantry', function() {
    expect(pantry).to.be.an.instanceof(Pantry);
});

it('should have a property of ingredients', function() {
    expect(pantry.ingredients).to.deep.equal([]);
  });

});