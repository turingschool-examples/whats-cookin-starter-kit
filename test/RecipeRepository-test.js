import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from "../src/classes/Recipe";
const {recipeData} = require('../src/data/recipes');



// const repository = new RecipeRepository(recipeData);

describe.only('Recipe Repository', () => {
  let repository;
  beforeEach(() => {
    repository = new RecipeRepository();
    repository.addRecipes()
    repository.getTags()
  });

  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it("should have an array full of instantiations of recipe objects", ()=>{
    expect(repository.recipeObjects[1]).to.be.an.instanceOf(Recipe)
  })

  it('should have a method to take in recipe data and output to array', () => {
    const recipe2 = new Recipe(recipeData[16])
    expect(repository.recipeObjects[16]).to.deep.equal(recipe2);
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
    expect(output2.length).to.equal(6);
    expect(output2[5].id).to.equal(583738);
  });
  it("should be able to record all individual tags from the data set", () => {
    const cookieTag = recipeData[0].tags[0]
    expect(repository.tags[0]).to.equal(cookieTag)
  })
})
/*
Sesame Cookies
Puppy Chow Cookies
The Ultimate Healthy Soft & Chewy Pumpkin Chocolate Chip Cookies
Reese's Pieces Peanut Butter Cookies
*/
