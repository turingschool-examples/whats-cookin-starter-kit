import { expect } from 'chai';
import { calculateCost } from '../src/functions/calculate-cost'

describe('calculate cost', () => {
  it('should be a function', () => {
    expect(calculateCost).to.be.a('function')
  })
})