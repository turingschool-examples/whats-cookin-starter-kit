import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
const {recipeData} = require('../src/data/recipes');



// const repository = new RecipeRepository(recipeData);

describe('Recipe Repository', () => {
  let repository;
  beforeEach(() => {
    repository = new RecipeRepository(recipeData);
  });

  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('should have a parameter to take in recipe data', () => {
    expect(repository.recipeObjects[3]).to.equal(recipeData[3]);
  });
  it('filterbyTag should be a method of RecipeRepository', ()=>{
    expect(repository.filterByTag).to.be.a('function');
  });

  it('filterByTag should return a filtered list of recipes based on a tag', () => {
    let output = repository.filterByTag('snack');
    expect(output.length).to.equal(9);
    expect(output[8].id).to.equal(583738);
  });
  it('filterByTag should NOT affect the length of the recipeObjects property array', () => {
    expect(repository.recipeObjects.length).to.equal(50);
    repository.filterByTag('snack');
    expect(repository.recipeObjects.length).to.equal(50);
  });
  it('filterbyName should be a method of RecipeRepository', ()=>{
    expect(repository.filterByName).to.be.a('function');
  });
  it('filterByName should return a filtered list of recipes based on a string', () => {
    let output = repository.filterByName('Cookies');
    expect(output[3].id).to.equal(583738);
    expect(output.length).to.equal(4);
    let output2 = repository.filterByName('Cookie');
    console.log(output2.length);
    expect(output2.length).to.equal(6);
    expect(output2[5].id).to.equal(583738);
  });

})
/*
Sesame Cookies
Puppy Chow Cookies
The Ultimate Healthy Soft & Chewy Pumpkin Chocolate Chip Cookies
Reese's Pieces Peanut Butter Cookies
*/
