import { expect } from "chai";
import { recipe1, recipe2 } from "../src/data/mockRecipe";
import { findRecipeIngredients, findRecipeInstructions } from "../src/recipes";

describe("Recipe", () => {
  describe("Find ingredients", () => {
    it("Should be a function", () => {
      expect(findRecipeIngredients).to.be.a("function");
    });

    it("Should return an array of ingredients given a recipe", () => {
      const ingredients = findRecipeIngredients(recipe1);
      expect(ingredients).to.deep.equal([
        "wheat flour",
        "bicarbonate of soda",
        "eggs",
        "sucrose",
        "instant vanilla pudding",
        "brown sugar",
        "salt",
        "fine sea salt",
        "semi sweet chips",
        "unsalted butter",
        "vanilla",
      ]);
    });

    it("Should return an array of ingredients given a recipe", () => {
      const ingredients = findRecipeIngredients(recipe2);
      expect(ingredients).to.deep.equal([
        "wheat flour",
        "blanched almond flour",
        "egg yolks",
        "salt",
        "sesame seeds",
        "sucrose",
        "unsalted butter",
      ]);
    });
  });

  describe("Find instructions", () => {
    it("will return an array", () => {
      const instructions = findRecipeInstructions(recipe1);
      expect(Array.isArray(instructions)).to.equal(true);
    });

    it("will make instructions for Recipe1", () => {
      const instructions = findRecipeInstructions(recipe1);
      expect(instructions).to.deep.equal([
        "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "Add egg and vanilla and mix until combined.",
        "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
        "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
        "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
      ]);
    });

    it("will make instructions for Recipe2", () => {
      const instructions = findRecipeInstructions(recipe2);
      expect(instructions).to.deep.equal([
        "Cut the butter into small cubes and keep them refrigerated until ready to use (I cut on parchment paper and wrap up the butter for easy transfer.).In the food processor, combine the flour, almond meal, sugar, and salt. If you don’t have a food processor, you can simply use a bowl to mix all the ingredients.If you want your sesame seeds to be fine texture, add them now. If you prefer to keep the original shape of sesame seeds, add them with egg yolk later on.Take out the butter from the refrigerator and mix together. If you use a regular bowl to mix, use a dough/pastry blender to combine the butter into the dry ingredients.Lastly add egg yolk.If the food processor is small (like mine) and it doesn’t look like it’s mixed completely, take it out and mix well with a silicone spatula.Form the dough into a ball and cut in half.",
        "Roll it to a log approximately 2” across. For me it’s easier to work when the dough is wrapped in plastic wrap. While rolling, unwrap some parts of plastic wrap then roll again. Form a nice shape. I wasn't paying attention so my log is flat on one side (see step 11)!Wrap the logs tightly in plastic wrap and refrigerate until firm, about 1 hour.Preheat the oven to 350° F (175° C).",
        "Remove the dough from plastic wrap and cut into discs about ¼ inch thick (if you prefer thicker cookies, cut into discs about ½ inch and you get 20 cookies total).",
        "Place them on two baking sheets lined with parchment paper.",
        "Bake for about 15 minutes, or until lightly browned around the edges.",
        "Remove from the oven and allow to cool on the baking sheet for about 10 minutes. Then transfer to a wire rack to cool completely. Store cookies in an airtight container. Cookies will last for a day or two.",
      ]);
    });
  });
});
