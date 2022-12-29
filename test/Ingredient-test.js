import { expect } from "chai";
import { Ingredient } from "../src/classes/Ingredient";

describe("Ingredient", () => {
    let ingredient1;
    let ingredient1Data;
    beforeEach(function() {
        ingredient1 = new Ingredient(ingredient1Data);
        ingredient1Data = {
            "id": 18372,
            "name": "bicarbonate of soda",
            "estimatedCostInCents": 582
          };
    });

    it.skip("Should be a function", () => {
        expect(Ingredient).to.be.a('function');
    });

    it.skip("Should instantiate our good friend RecipesContainer", () => {
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