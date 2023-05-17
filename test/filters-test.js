import { expect } from 'chai';
import { filterByTag, filterByName } from '../src/filters';
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';

describe('filterByTag', () => {
  it('should filter recipe list by tag', () => {
    const tag1 = 'snack cookie';
    const tag2 = 'DESSERT';
    const tag3 = 'concrete';
    expect(filterByTag(tag1, sampleRecipeData)).to.deep.equal([
      sampleRecipeData[0],
      sampleRecipeData[2],
    ]);
    expect(filterByTag(tag2, sampleRecipeData)).to.deep.equal([
      sampleRecipeData[0],
      sampleRecipeData[2],
      sampleRecipeData[3],
    ]);
    expect(filterByTag(tag3, sampleRecipeData)).to.deep.equal(
      'Sorry, no recipes were found in your search!'
    );
  });
});

describe('filterByName', () => {
  it('should filter recipe list by name', () => {
    const name1 = 'macarons';
    const name2 = 'PUPPY';
    const name3 = 'macaroni & cheese';
    expect(filterByName(name1, sampleRecipeData)).to.deep.equal([sampleRecipeData[0]]);
    expect(filterByName(name2, sampleRecipeData)).to.deep.equal([sampleRecipeData[2]]);
    expect(filterByName(name3, sampleRecipeData)).to.deep.equal(
      'Sorry, no recipes were found in your search!'
    );
  });
});
