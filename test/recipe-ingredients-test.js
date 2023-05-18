import { expect } from 'chai';
import { recipeIngredients } from '../src/functions/recipe-ingredients';

describe('recipe ingredients', () => {
  it('should be a function', function() {
    expect(recipeIngredients).to.be.a('function')
  })
  it('should return the ingredients for a recipe', () => {
    const ingredients = recipeIngredients("Maple Dijon Apple Cider Grilled Pork Chops")
    expect(ingredients).to.deep.equal(["apple cider", "apple", "corn starch", "dijon style mustard", "whole garlic clove", "whole grain dijon mustard", "maple", "miso", "pork chop", "s&p", "soy sauce", "sriracha sauce"])
  })
  it('should return a error message when given an invalid recipe', () => {
    expect(recipeIngredients('hotdog')).to.equal('Sorry, cannot find a recipe for hotdog.')
  })
})
