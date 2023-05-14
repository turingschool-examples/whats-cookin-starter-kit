import { expect } from 'chai';
import { getIngredientName } from '../src/get-ingredient-name'
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';

describe('getIngredientName', () => {
  it('should be a fuction', () => {
    expect(getIngredientName).to.be.a('function');
  });

  it('should Determine the names of ingredients needed for a given recipe', () => {
    expect(getIngredientName(sampleRecipeData[0])).to.have.all.members([sampleIngredientsData[0].name,sampleIngredientsData[6].name, sampleIngredientsData[7].name, sampleIngredientsData[8].name, sampleIngredientsData[9].name]);
    expect(getIngredientName(sampleRecipeData[1])).to.have.all.members([sampleIngredientsData[1].name,sampleIngredientsData[2].name, sampleIngredientsData[3].name]);
    expect(getIngredientName(sampleRecipeData[2])).to.have.all.members([sampleIngredientsData[0].name,sampleIngredientsData[1].name, sampleIngredientsData[2].name, sampleIngredientsData[3].name,sampleIngredientsData[4].name, sampleIngredientsData[5].name,sampleIngredientsData[6].name, sampleIngredientsData[7].name, sampleIngredientsData[8].name, sampleIngredientsData[9].name]);
    expect(getIngredientName(sampleRecipeData[3])).to.have.all.members([sampleIngredientsData[0].name,sampleIngredientsData[1].name, sampleIngredientsData[2].name, sampleIngredientsData[3].name, sampleIngredientsData[4].name, sampleIngredientsData[5].name,sampleIngredientsData[6].name]);
    expect(getIngredientName(sampleRecipeData[4])).to.have.all.members([sampleIngredientsData[2].name,sampleIngredientsData[3].name, sampleIngredientsData[4].name, sampleIngredientsData[5].name, sampleIngredientsData[6].name, sampleIngredientsData[7].name, sampleIngredientsData[8].name, sampleIngredientsData[9].name]);
    expect(getIngredientName(sampleRecipeData[5])).to.have.all.members([sampleIngredientsData[6].name,sampleIngredientsData[5].name, sampleIngredientsData[4].name, sampleIngredientsData[3].name,sampleIngredientsData[2].name, sampleIngredientsData[1].name,sampleIngredientsData[0].name]);
    expect(getIngredientName(sampleRecipeData[6])).to.have.all.members([sampleIngredientsData[2].name,sampleIngredientsData[1].name, sampleIngredientsData[0].name, sampleIngredientsData[4].name,sampleIngredientsData[5].name, sampleIngredientsData[3].name,sampleIngredientsData[7].name, sampleIngredientsData[6].name, sampleIngredientsData[8].name, sampleIngredientsData[9].name]);
  })
})