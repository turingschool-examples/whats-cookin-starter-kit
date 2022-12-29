import { expect } from "chai";
import { Ingredient } from "../src/classes/Ingredient";

describe("Ingredient", () => {
    let ingredient1;
    beforeEach(function() {
        ingredient1 = {
            "id": 18372,
            "name": "bicarbonate of soda",
            "estimatedCostInCents": 582
          };
    });

    it('Should be a function', () => {
        expect(Ingredient).to.be.a('function');
    });

    it('Should instantiate our good friend RecipesContainer', () => {
        expect(ingredient1).to.be.an.instanceOf(Ingredient);
    });
    
    it("Should have a property to store an ingredient's id")

    it("Should have a property to store the ingredient name")

    it("Should have a property to store its estimatedCostInCents")

    it("Should have a method to get the cost of an ingredient")
        let method1;
    it("Should have a method to get an ingredient name")
        let method2;
});