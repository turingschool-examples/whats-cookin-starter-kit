import { expect } from 'chai'; 
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', ( ) => {
    let ingredient;
    let dataIngredient;

    beforeEach( ( ) => {
        dataIngredient = {
            "id": 20081,
            "name": "wheat flour",
            "estimatedCostInCents": 142
          }
        
        ingredient = new Ingredient( dataIngredient.id, dataIngredient.name, dataIngredient.estimatedCostInCents );
        
    } );

    it( 'should be a function', ( ) => {
        expect( Ingredient ).to.be.a( 'function' );
    } );

    it( 'should be an instance of Ingredient', ( ) => {
        expect( ingredient ).to.be.an.instanceOf( Ingredient )
    } );

    it( 'should take in an ingredient id', ( ) => {
        expect( ingredient.id ).to.equal( 20081 )
    } );

    it( 'should take in an ingredient name', ( ) => {
        expect( ingredient.name ).to.equal( 'wheat flour' )
    } );

    it( 'should take in an ingredients estimatedCostInCents', ( ) => {
        expect( ingredient.estimatedCostInCents ).to.equal( 142 )
    } );
} );