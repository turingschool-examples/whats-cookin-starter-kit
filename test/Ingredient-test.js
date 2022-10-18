import {expect} from "chai";
import sampleIngredientData from '../sampleSets/Ingredients-sample';
import Ingredient from '../src/classes/Ingredient-class'


describe("Ingredient",function(){
    const ingredient1 = new Ingredient(sampleIngredientData[0])
    
   
    it('should be a function',function() {
        expect(Ingredient).to.be.a('function')
    })

    it('should have an id', function() {
        expect(ingredient1.id).to.equal(20081)
    })

    it('should have a different id',function(){
        const ingredient2 = new Ingredient(sampleIngredientData[1])
        expect(ingredient2.id).to.equal(18372)
    })
    
    it('should have a name', function() {
        let ingredient3 = new Ingredient(sampleIngredientData[2])
        expect(ingredient3.name).to.equal('eggs')
    })

    it('should have different names ', function() {
        const ingredient2 = new Ingredient(sampleIngredientData[1])
        expect(ingredient2.name).to.equal("bicarbonate of soda")
    })

    it('should have a costInCents', function() {
        expect(ingredient1.costInCents).to.equal(142)
    })

    it('should be able to have a different costInCents',function(){
       const ingredient3 = new Ingredient(sampleIngredientData[2])
        expect(ingredient3.costInCents).to.equal(472)
    })
});

