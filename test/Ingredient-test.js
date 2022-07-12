import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

let ingredient;
let ingredientsData;
  
  beforeEach(function() {
    ingredientsData = 
      {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
      }
    
  ingredient = new Ingredient(ingredientsData);
  });

describe('Ingredient', () => {
    it('should be a function', function() {
      expect(Ingredient).to.be.a('function');
    })
  
    it('should be an instance of ingredient', function() {
      expect(ingredient).to.be.an.instanceOf(Ingredient);
    })
  
    it('should have an id of an ingredient', function() {
      expect(ingredient.id).to.equal(20081)
    });

    it('should have an ingredient name', function() {
      expect(ingredient.name).to.equal("wheat flour")
    });

    it('should have an ingredient estimatedCostInCents', function() {
      expect(ingredient.estimatedCostInCents).to.equal(142)
  });
});
