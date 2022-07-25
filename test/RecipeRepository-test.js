import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../src/sample-data/recipe-sample-data';
import ingredientData from '../src/sample-data/ingredient-sample-data';

describe( 'RecipeRepository', ( ) => {
  let recipeRepo;

  beforeEach( ( ) => {
         
    recipeRepo = new RecipeRepository( recipeData, ingredientData )

  } );

  it( 'Should be a function', ( ) => {
    expect( RecipeRepository ).to.be.a( 'function' );
  } );

  it( 'should be an instance of RecipeRepo', ( ) => {
    expect( recipeRepo ).to.be.an.instanceOf( RecipeRepository );
  } );

  it( 'should take in recipes', ( ) => {
    expect( recipeRepo.recipes ).to.deep.equal( recipeData )
  } );

  it( 'should filter by tag', ( ) => {
    expect( recipeRepo.filterRecipeByTag( 'antipasti' ) ).to.deep.equal( [ recipeData[0] ] )
    expect( recipeRepo.filterRecipeByTag( 'lunch' ) ).to.deep.equal( [ recipeData[1] ] )
  } );

  it( 'should filter by recipe name', ( ) => {
    expect( recipeRepo.filterRecipeByName( "loaded chocolate chip pudding cookie cups" ) ).to.deep.equal( [ recipeData[ 0 ] ] )
    expect( recipeRepo.filterRecipeByName( "Maple Dijon Apple Cider Grilled Pork Chops" ) ).to.deep.equal( [ recipeData[ 1 ] ] )
  } );

} );