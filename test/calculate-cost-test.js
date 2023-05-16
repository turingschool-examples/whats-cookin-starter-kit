import { expect } from 'chai';
import { calculateCost } from '../src/functions/calculate-cost'

describe('calculate cost', () => {
  it('should calculate the cost of a recipe', () => {
    expect(calculateCost("Maple Dijon Apple Cider Grilled Pork Chops")).to.equal('$27.30')
  });

  it('should ')
})