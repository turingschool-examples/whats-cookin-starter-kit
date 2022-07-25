import { expect } from 'chai'; 
import Recipe from '../src/classes/Recipe'; 
import recipeData from '../src/sample-data/recipe-sample-data';
import ingredientData from '../src/sample-data/ingredient-sample-data';


describe('Recipe', ( ) => {
    let recipe1;
    let recipe2;

    beforeEach( ( ) => {
 
    recipe1 = new Recipe( recipeData[0], ingredientData );
    // recipe2 = new Recipe( recipeData, ingredientData );

  } );

  it( 'should be a function', ( ) => {
    expect( Recipe ).to.be.a( 'function' );
  } );

  it( 'should be an instance of Recipe', ( ) => {
    expect( recipe1 ).to.be.an.instanceOf( Recipe );
  } );

  it('should take in an id', ( ) => {
    expect( recipe1.id ).to.be.a('number');
    expect( recipe1.id ).to.equal( recipeData[0].id );
  } );

  it('should have an image', ( ) => {
    expect( recipe1.image ).to.equal( recipeData[0].image );
  } );

  it( 'should contain recipe ingredients', ( ) => {
    expect( recipe1.recipeIngredients ).to.be.a( "array" );
    expect( recipe1.recipeIngredients ).to.deep.equal( recipeData[0].ingredients );
  } );

  it( 'should have recipe instructions', ( ) => {
    expect( recipe1.instructions ).to.be.a( "array" );
    expect( recipe1.instructions ).to.deep.equal( recipeData[0].instructions );
  } );

  it( 'should have a recipe name', () => {
    expect( recipe1.name ).to.be.a( "string" );
    expect( recipe1.name ).to.equal( recipeData[0].name );
  } );

  it( 'should have recipe tags', ( ) => {
    expect( recipe1.tags ).to.be.a( "array" );
    expect( recipe1.tags ).to.deep.equal( recipeData[0].tags );
  } );

  it(' should get ingredients names from recipes', ( ) => {
    expect( recipe1.getIngredientsWithNames( recipeData[0].ingredients , ingredientData ) ).to.be.a( "array" );
    expect( recipe1.getIngredientsWithNames( recipeData[0].ingredients , ingredientData ) ).to.deep.equal
    ( 
      [
        'wheat flour',
        'bicarbonate of soda',
        'eggs',
        'sucrose',
        'instant vanilla pudding',
        'brown sugar',
        'salt',
        'fine sea salt',
        'semi sweet chips',
        'unsalted butter',
        'vanilla'
      ] 
    );
  } );

  it( 'should get cost of ingredients', ( ) => {
    expect( recipe1.getCostOfIngredients( recipeData[0].ingredients , ingredientData ) ).to.be.a( "number" );
    expect( recipe1.getCostOfIngredients( recipeData[0].ingredients , ingredientData ) ).to.equal( 17776 );
  } );
  
  it( 'should return directions and instructions', ( ) => {
    expect( recipe1.returnInstructions( recipeData[0].ingredients , ingredientData ) ).to.be.a( "array" );
    expect( recipe1.returnInstructions( recipeData[0].ingredients , ingredientData ) ).to.deep.equal( recipeData[0].instructions );
  } );

} );

