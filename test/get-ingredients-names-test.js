import { expect } from 'chai';
import { getIngredientsNames } from '../src/get-ingredients-names'
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';

describe('getIngredientsNames', () => {
  it('should be a fuction', () => {
    expect(getIngredientsNames).to.be.a('function');
  });

  it('should Determine the names of ingredients needed for a given recipe', () => {
    expect(getIngredientsNames(sampleRecipeData[0], sampleIngredientsData)).to.have.same.members([sampleIngredientsData[0].name,sampleIngredientsData[6].name, sampleIngredientsData[7].name, sampleIngredientsData[8].name, sampleIngredientsData[9].name]);
    expect(getIngredientsNames(sampleRecipeData[1], sampleIngredientsData)).to.have.same.members([sampleIngredientsData[1].name,sampleIngredientsData[2].name, sampleIngredientsData[3].name]);
    expect(getIngredientsNames(sampleRecipeData[2], sampleIngredientsData)).to.have.same.members([sampleIngredientsData[0].name,sampleIngredientsData[1].name, sampleIngredientsData[2].name, sampleIngredientsData[3].name,sampleIngredientsData[4].name, sampleIngredientsData[5].name,sampleIngredientsData[6].name, sampleIngredientsData[7].name, sampleIngredientsData[8].name, sampleIngredientsData[9].name]);
    expect(getIngredientsNames(sampleRecipeData[3], sampleIngredientsData)).to.have.same.members([sampleIngredientsData[0].name,sampleIngredientsData[1].name, sampleIngredientsData[2].name, sampleIngredientsData[3].name, sampleIngredientsData[4].name, sampleIngredientsData[5].name,sampleIngredientsData[6].name]);
    expect(getIngredientsNames(sampleRecipeData[4], sampleIngredientsData)).to.have.same.members([sampleIngredientsData[2].name,sampleIngredientsData[3].name, sampleIngredientsData[4].name, sampleIngredientsData[5].name, sampleIngredientsData[6].name, sampleIngredientsData[7].name, sampleIngredientsData[8].name, sampleIngredientsData[9].name]);
    expect(getIngredientsNames(sampleRecipeData[5], sampleIngredientsData)).to.have.same.members([sampleIngredientsData[6].name,sampleIngredientsData[5].name, sampleIngredientsData[4].name, sampleIngredientsData[3].name,sampleIngredientsData[2].name, sampleIngredientsData[1].name,sampleIngredientsData[0].name]);
    expect(getIngredientsNames(sampleRecipeData[6], sampleIngredientsData)).to.have.same.members([sampleIngredientsData[2].name,sampleIngredientsData[1].name, sampleIngredientsData[0].name, sampleIngredientsData[4].name,sampleIngredientsData[5].name, sampleIngredientsData[3].name,sampleIngredientsData[7].name, sampleIngredientsData[6].name, sampleIngredientsData[8].name, sampleIngredientsData[9].name]);
  })
})