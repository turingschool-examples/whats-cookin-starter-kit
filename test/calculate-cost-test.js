import { expect } from 'chai';
import { calculateCost } from '../src/functions/calculate-cost'

describe('calculate cost', () => {
  it('should be a function', () => {
    expect(calculateCost).to.be.a('function')
  })
  it('should calculate the cost of a recipe', () => {
    expect(calculateCost("Maple Dijon Apple Cider Grilled Pork Chops")).to.equal('$28.65')
  })
})