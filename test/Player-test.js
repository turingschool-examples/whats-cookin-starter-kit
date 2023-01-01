import { expect } from "chai";
import Recipe from "../src/classes/Recipe";
import Player from "../src/classes/Player";

describe("Player", () => {
    let player1;
    let player2
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
        }

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

    let bigRecipeData = [{
        "id": 724018,
        "image": "https://spoonacular.com/recipeImages/724018-556x370.jpg",
        "ingredients": [
            {"id": 11007,"quantity": {"amount": 2, "unit": "large"}},
            {"id": 11297,"quantity": {"amount": 0.5, "unit": "cup"}},
            {"id": 11215, "quantity": {"amount": 6, "unit": "cloves"}},
            {"id": 2027, "quantity": {"amount": 1, "unit": "teaspoon"}},
            {"id": 1034053, "quantity": {"amount": 0.5, "unit": "cup"}}
        ],
        "instructions": [
            {"instruction": "Cut off the crust from 6 slices of bread. Chop the centers and put into a food processor. Pulse until you have coarse breadcrumbs. You should have about 3 cups.", "number": 1},
            { "instruction": "Make the stuffing: In a large bowl, stir together the breadcrumbs, lemon zest, Parmesan cheese, minced garlic, chopped parsley, minced oregano, 1/2 cup olive oil, and black pepper. Set aside.", "number": 2}
        ],
        "name": "Baked Stuffed Artichokes",
        "tags": ["side dish", "antipasti", "starter", "snack", "appetizer", "antipasto", "hor d'oeuvre"]
        },
        {
        "id": 623855,
        "image": "https://spoonacular.com/recipeImages/623855-556x370.jpg",
        "ingredients": [
            {"id": 18372, "quantity": {"amount": 1, "unit": "tsp"}},
            {"id": 10116098, "quantity": {"amount": 1, "unit": "cup"}},
            {"id": 1123, "quantity": {"amount": 1, "unit": ""}},
            {"id": 20081, "quantity": {"amount": 1.25, "unit": "cup"}},
            {"id": 19335, "quantity": {"amount": 0.5, "unit": "cup"}},
            {"id": 19334, "quantity": {"amount": 0.5, "unit": "cup"}},
        ],
        "instructions": [
            {"instruction": "Preheat oven to 350FLine a baking sheet with parchment, set aside.In bowl of stand mixer cream butter and peanut butter together until smooth.", "number": 1},
            {"instruction": "Add both sugars and beat for 2 minutes.", "number": 2},
        ],
        "name": "Puppy Chow Cookies",
        "tags": ["side dish", "trailmix"]
        },
        {
        "id": 543687,
        "image": "https://spoonacular.com/recipeImages/543687-556x370.jpg",
        "ingredients": [
            {"id": 93607, "quantity": {"amount": 1, "unit": "cup"}},
            {"id": 9040, "quantity": {"amount": 1, "unit": "small"}},
            {"id": 18942, "quantity": {"amount": 1, "unit": "Tbsp"}}],
        "instructions": [
            {"instruction": "Add all ingredients to a blender (except graham crackers if using). Cover and blend until well pureed then serve topped with crushed graham crackers if desired.*The banana is mostly what gives this smoothie it's sweetness, so I recommend using one that is speckled (not mushy though).Recipe Source: Cooking Classy", "number": 1}
        ],
        "name": "Pumpkin Cheesecake Breakfast Smoothie",
        "tags": [ "morning meal", "brunch", "breakfast"]
        },
        {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
                {"id": 20081, "quantity": {"amount": 1.5, "unit": "c"}},
                {"id": 2050, "quantity": {"amount": 0.5, "unit": "tsp"}}
        ],
        "instructions": [
            {"instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.", "number": 1},
            {"instruction": "Add egg and vanilla and mix until combined.", "number": 2},],
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "tags": [ "antipasti", "starter", "snack", "appetizer",     "antipasto", "hor d'oeuvre" ]
        }
    ];

    beforeEach(function() {
            player1 = new Player(onePlayerData);
            recipe1 = new Recipe(recipe1Data);
            recipe2 = new Recipe(recipe2Data);

            player2 = new Player(onePlayerData);
            player2.addToCookList(recipe1.id);
            player2.addToCookList(recipe2.id);
    });

    it("Should be a function", () => {
            expect(Player).to.be.a("function");
    });
    
    it("Should instantiate our good friend Player", () => {
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
            expect(player1.toCookList).to.deep.equal([595736]);
            player1.addToCookList(recipe2.id);
            expect(player1.toCookList).to.deep.equal([543687, 595736]);
    });

    it("Should have a method to remove a recipe from the Player's saved to-cook recipes", () => {
            expect(player2.toCookList).to.deep.equal([543687, 595736]);

            player2.removeIdFromToCookList(recipe2.id);
            expect(player2.toCookList).to.deep.equal([595736]);

            player2.removeIdFromToCookList(recipe1.id);
            expect(player2.toCookList).to.have.lengthOf(0);
//--> sad path test:
            player2.removeIdFromToCookList(recipe1.id);
    });

    it("Should have a method to locate recipes, virtually filling a recipe box, for the following filter methods", () => {
            let method3 = player2.fillRecipeBox(bigRecipeData);
            expect(player2.toCookList[0]).to.be.equal(method3[0].id);
            expect(method3).to.have.deep.members([recipe2Data, recipe1Data]);
    });

    it("Should have a method to filter the to-cook list by tag", () => {
            let tag = "snack";
            let tag2 = "trailmix";
            let method4 = player2.filterMyRecipeTags(tag, bigRecipeData);
            let method4B = player2.filterMyRecipeTags(tag2, bigRecipeData);
            expect(method4).to.have.deep.members([recipe1]);
            expect(method4B).to.have.lengthOf(0);
    });

    it("Should have a method to filter to-cook list by name", () => {
            let name = "Pumpkin Cheesecake Breakfast Smoothie";
            let method5 = player2.filterMyRecipeNames(name, bigRecipeData);
            expect(method5.id).to.be.equal(543687);
    })
});