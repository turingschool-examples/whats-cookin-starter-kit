import { expect } from "chai";
import Ingredient from "../src/classes/Ingredient";
import Recipe from "../src/classes/Recipe";
import Player from "../src/classes/Player";

describe("Player", () => {
    let player1;
    let recipe1;
    let recipe2;
    let onePlayerData = {
        "name": "Saige O'Kon",
        "id": 1,
        "pantry": [
          {"ingredient": 11297, "amount": 4},
          {"ingredient": 1082047, "amount": 10},
          {"ingredient": 2047, "amount": 6},
          {"ingredient": 1123, "amount": 8}] 
        };
    let somePlayersData =  [{
        "name": "Saige O'Kon",
        "id": 1,
        "pantry": [
            {"ingredient": 11297, "amount": 4},
          {"ingredient": 1082047, "amount": 10},
          {"ingredient": 2047, "amount": 6},
          {"ingredient": 1123, "amount": 8}] 
        },
        {
        "name": "Ephraim Goyette",
        "id": 2,
        "pantry": [
          {"ingredient": 6150, "amount": 3},
          {"ingredient": 1032009, "amount": 7},
          {"ingredient": 2050, "amount": 10}]
        }];
        let recipe1Data = {
            "id": 595736,
            "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
            "ingredients": [
                {"id": 20081, "quantity": {"amount": 1.5, "unit": "c"}},
                {"id": 2050, "quantity": {"amount": 0.5, "unit": "tsp"}}
            ],
            "instructions": 
                [{"instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.", "number": 1},
                {"instruction": "Add egg and vanilla and mix until combined.", "number": 2},],
            "name": "Loaded Chocolate Chip Pudding Cookie Cups",
            "tags": [ "antipasti", "starter", "snack", "appetizer", "antipasto", "hor d'oeuvre" ]
        };

        let recipe2Data = {
            "id": 543687,
            "image": "https://spoonacular.com/recipeImages/543687-556x370.jpg",
            "ingredients": [
                {"id": 93607, "quantity": {"amount": 1, "unit": "cup"}},
                {"id": 9040, "quantity": {"amount": 1, "unit": "small"}},
                {"id": 18942, "quantity": {"amount": 1, "unit": "Tbsp"}}],
            "instructions": 
                [{"instruction": "Add all ingredients to a blender (except graham crackers if using). Cover and blend until well pureed then serve topped with crushed graham crackers if desired.*The banana is mostly what gives this smoothie it's sweetness, so I recommend using one that is speckled (not mushy though).Recipe Source: Cooking Classy", "number": 1}],
            "name": "Pumpkin Cheesecake Breakfast Smoothie",
            "tags": [ "morning meal", "brunch", "breakfast"]};

        beforeEach(function() {
            player1 = new Player(onePlayerData);
            recipe1 = new Recipe(recipe1Data);
            recipe2 = new Recipe(recipe2Data);
        });

        it("Should be a function", () => {
            expect(Player).to.be.a("function");
        });
    
        it("Should instantiate our good friend Recipe", () => {
            expect(player1).to.be.an.instanceOf(Player);
        });

        it("Should have a property that stores a Player name", () => {
            expect(player1.name).to.equal("Saige O'Kon");
        });

        it("Should have a property that stores a Player id", () => {
            expect(player1.id).to.equal(1);
        });

        it("Should have a property that stores a Player's pantry", () => {
            expect(player1.pantry).to.have.deep.members([
                {"ingredient": 11297, "amount": 4},
                {"ingredient": 1082047, "amount": 10},
                {"ingredient": 2047, "amount": 6},
                {"ingredient": 1123, "amount": 8}
            ]);
        });

        it("Should have a property that stores an empty array for saved to-cook recipes", () => {
            expect(player1.toCookList).to.be.an("array");
            expect(player1.toCookList).to.have.lengthOf(0);
        });

        it("Should have a method to add a recipe to the Player saved to-cook list", () => {
            //let method1 = something; returns undefined because my method updates a property and doesn't implicitly return
            player1.addToCookList(recipe1.id);
            //but what if there's more than one thing in there, the method returns inclusively? so +=?
            expect(player1.toCookList).to.deep.equal([595736]);
            player1.addToCookList(recipe2.id);
            expect(player1.toCookList).to.deep.equal([543687, 595736]);
            // console.log(player1.toCookList);
            //I don't think we should store recipe data here because class isn't meant to hold onto  recipe data, but Player data, so make this an array of recipe ids and not recipe data
        });

        it("Should have a method to remove a recipe from the Player's saved to-cook recipes", () => {
            player1.addToCookList(recipe1.id);
            player1.addToCookList(recipe2.id);
            expect(player1.toCookList).to.deep.equal([543687, 595736]);

            player1.removeIdFromToCookList(recipe2.id);
            expect(player1.toCookList).to.deep.equal([595736]);

            player1.removeIdFromToCookList(recipe1.id);
            expect(player1.toCookList).to.have.lengthOf(0);
//--> sad path test:
            player1.removeIdFromToCookList(recipe1.id);
        });
        
        it("Should have a method to filter the to-cook list by tag", () => {

            //--> method3 filter to-cook list by tag (use RecipeContainer method?)
        });

        it("Should have a method to filter to-cook list by name", () => {

            //--> method4 filter to-cook list by name (use other classes' methods)
        })

});