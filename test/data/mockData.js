const mockIngredients = [
  { id: 20081, name: "wheat flour", estimatedCostInCents: 142 },
  { id: 18372, name: "bicarbonate of soda", estimatedCostInCents: 582 },
  { id: 1123, name: "eggs", estimatedCostInCents: 472 },
  { id: 19335, name: "sucrose", estimatedCostInCents: 902 },
  {
    id: 19206,
    name: "instant vanilla pudding",
    estimatedCostInCents: 660,
  },
  { id: 19334, name: "brown sugar", estimatedCostInCents: 559 },
  { id: 2047, name: "salt", estimatedCostInCents: 280 },
  { id: 1012047, name: "fine sea salt", estimatedCostInCents: 528 },
  { id: 10019903, name: "semi sweet chips", estimatedCostInCents: 253 },
  { id: 1145, name: "unsalted butter", estimatedCostInCents: 617 },
  { id: 2050, name: "vanilla", estimatedCostInCents: 926 },
  {
    id: 93740,
    name: "blanched almond flour",
    estimatedCostInCents: 986,
  },
  { id: 1125, name: "egg yolks", estimatedCostInCents: 889 },
  { id: 12023, name: "sesame seeds", estimatedCostInCents: 886 },
  { id: 1002030, name: "black pepper", estimatedCostInCents: 441 },
  { id: 1001, name: "butter", estimatedCostInCents: 618 },
  { id: 4582, name: "oil", estimatedCostInCents: 807 },
  { id: 2031, name: "red pepper powder", estimatedCostInCents: 583 },
  { id: 5100, name: "chicken wing", estimatedCostInCents: 593 },
  { id: 2009, name: "red chili powder", estimatedCostInCents: 499 },
  { id: 1022020, name: "garlic powder", estimatedCostInCents: 344 },
  { id: 6168, name: "tabasco sauce", estimatedCostInCents: 859 },
  { id: 9176, name: "mangoes", estimatedCostInCents: 425 },
  { id: 2026, name: "onion powder", estimatedCostInCents: 597 },
  { id: 1042047, name: "seasoned salt", estimatedCostInCents: 334 },
  { id: 18371, name: "baking powder", estimatedCostInCents: 346 },
  { id: 9040, name: "ripe banana", estimatedCostInCents: 331 },
  { id: 20011, name: "buck wheat flour", estimatedCostInCents: 865 },
  { id: 1230, name: "buttermilk", estimatedCostInCents: 773 },
  { id: 19296, name: "runny honey", estimatedCostInCents: 742 },
  { id: 16098, name: "peanut butter", estimatedCostInCents: 490 },
];

const recipe1 = {
  id: 595736,
  image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
  ingredients: [
    {
      id: 20081,
      quantity: {
        amount: 1.5,
        unit: "c",
      },
    },
    {
      id: 18372,
      quantity: {
        amount: 0.5,
        unit: "tsp",
      },
    },
    {
      id: 1123,
      quantity: {
        amount: 1,
        unit: "large",
      },
    },
    {
      id: 19335,
      quantity: {
        amount: 0.5,
        unit: "c",
      },
    },
    {
      id: 19206,
      quantity: {
        amount: 3,
        unit: "Tbsp",
      },
    },
    {
      id: 19334,
      quantity: {
        amount: 0.5,
        unit: "c",
      },
    },
    {
      id: 2047,
      quantity: {
        amount: 0.5,
        unit: "tsp",
      },
    },
    {
      id: 1012047,
      quantity: {
        amount: 24,
        unit: "servings",
      },
    },
    {
      id: 10019903,
      quantity: {
        amount: 2,
        unit: "c",
      },
    },
    {
      id: 1145,
      quantity: {
        amount: 0.5,
        unit: "c",
      },
    },
    {
      id: 2050,
      quantity: {
        amount: 0.5,
        unit: "tsp",
      },
    },
  ],
  instructions: [
    {
      instruction:
        "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
      number: 1,
    },
    {
      instruction: "Add egg and vanilla and mix until combined.",
      number: 2,
    },
    {
      instruction:
        "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
      number: 3,
    },
    {
      instruction:
        "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
      number: 4,
    },
    {
      instruction:
        "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
      number: 5,
    },
    {
      instruction:
        "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
      number: 6,
    },
  ],
  name: "Loaded Chocolate Chip Pudding Cookie Cups",
  tags: [
    "antipasti",
    "starter",
    "snack",
    "appetizer",
    "antipasto",
    "hor d'oeuvre",
  ],
};

const recipe2 = {
  id: 541288,
  image: "https://spoonacular.com/recipeImages/541288-556x370.jpg",
  ingredients: [
    {
      id: 20081,
      quantity: {
        amount: 160,
        unit: "g",
      },
    },
    {
      id: 93740,
      quantity: {
        amount: 40,
        unit: "g",
      },
    },
    {
      id: 1125,
      quantity: {
        amount: 1,
        unit: "",
      },
    },
    {
      id: 2047,
      quantity: {
        amount: 1,
        unit: "pinch",
      },
    },
    {
      id: 12023,
      quantity: {
        amount: 40,
        unit: "g",
      },
    },
    {
      id: 19335,
      quantity: {
        amount: 80,
        unit: "g",
      },
    },
    {
      id: 1145,
      quantity: {
        amount: 1,
        unit: "stick",
      },
    },
  ],
  instructions: [
    {
      instruction:
        "Cut the butter into small cubes and keep them refrigerated until ready to use (I cut on parchment paper and wrap up the butter for easy transfer.).In the food processor, combine the flour, almond meal, sugar, and salt. If you don’t have a food processor, you can simply use a bowl to mix all the ingredients.If you want your sesame seeds to be fine texture, add them now. If you prefer to keep the original shape of sesame seeds, add them with egg yolk later on.Take out the butter from the refrigerator and mix together. If you use a regular bowl to mix, use a dough/pastry blender to combine the butter into the dry ingredients.Lastly add egg yolk.If the food processor is small (like mine) and it doesn’t look like it’s mixed completely, take it out and mix well with a silicone spatula.Form the dough into a ball and cut in half.",
      number: 1,
    },
    {
      instruction:
        "Roll it to a log approximately 2” across. For me it’s easier to work when the dough is wrapped in plastic wrap. While rolling, unwrap some parts of plastic wrap then roll again. Form a nice shape. I wasn't paying attention so my log is flat on one side (see step 11)!Wrap the logs tightly in plastic wrap and refrigerate until firm, about 1 hour.Preheat the oven to 350° F (175° C).",
      number: 2,
    },
    {
      instruction:
        "Remove the dough from plastic wrap and cut into discs about ¼ inch thick (if you prefer thicker cookies, cut into discs about ½ inch and you get 20 cookies total).",
      number: 3,
    },
    {
      instruction:
        "Place them on two baking sheets lined with parchment paper.",
      number: 4,
    },
    {
      instruction:
        "Bake for about 15 minutes, or until lightly browned around the edges.",
      number: 5,
    },
    {
      instruction:
        "Remove from the oven and allow to cool on the baking sheet for about 10 minutes. Then transfer to a wire rack to cool completely. Store cookies in an airtight container. Cookies will last for a day or two.",
      number: 6,
    },
  ],
  name: "Sesame Cookies",
  tags: [
    "antipasti",
    "starter",
    "snack",
    "appetizer",
    "antipasto",
    "hor d'oeuvre",
  ],
};

const recipe3 = {
  id: 412309,
  image: "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
  ingredients: [
    {
      id: 1002030,
      quantity: {
        amount: 4,
        unit: "teaspoons",
      },
    },
    {
      id: 19334,
      quantity: {
        amount: 8,
        unit: "tablespoons",
      },
    },
    {
      id: 1001,
      quantity: {
        amount: 2,
        unit: "cups",
      },
    },
    {
      id: 4582,
      quantity: {
        amount: 4,
        unit: "servings",
      },
    },
    {
      id: 2031,
      quantity: {
        amount: 4,
        unit: "teaspoons",
      },
    },
    {
      id: 5100,
      quantity: {
        amount: 1,
        unit: "pound",
      },
    },
    {
      id: 2009,
      quantity: {
        amount: 4,
        unit: "teaspoons",
      },
    },
    {
      id: 1022020,
      quantity: {
        amount: 4,
        unit: "teaspoons",
      },
    },
    {
      id: 6168,
      quantity: {
        amount: 8,
        unit: "cups",
      },
    },
    {
      id: 9176,
      quantity: {
        amount: 0.5,
        unit: "cup",
      },
    },
    {
      id: 2026,
      quantity: {
        amount: 4,
        unit: "teaspoons",
      },
    },
    {
      id: 1042047,
      quantity: {
        amount: 1.5,
        unit: "tablespoons",
      },
    },
    {
      id: 1042047,
      quantity: {
        amount: 4,
        unit: "teaspoons",
      },
    },
  ],
  instructions: [
    {
      instruction:
        "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
      number: 1,
    },
  ],
  name: "Dirty Steve's Original Wing Sauce",
  tags: ["sauce"],
};

const recipe4 = {
  id: 741603,
  image: "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
  ingredients: [
    {
      id: 20081,
      quantity: {
        amount: 1,
        unit: "cup",
      },
    },
    {
      id: 18371,
      quantity: {
        amount: 2,
        unit: "teaspoons",
      },
    },
    {
      id: 9040,
      quantity: {
        amount: 12,
        unit: "servings",
      },
    },
    {
      id: 20011,
      quantity: {
        amount: 1,
        unit: "cup",
      },
    },
    {
      id: 1001,
      quantity: {
        amount: 2,
        unit: "tablespoons",
      },
    },
    {
      id: 1001,
      quantity: {
        amount: 6,
        unit: "tablespoons",
      },
    },
    {
      id: 1230,
      quantity: {
        amount: 2,
        unit: "cups",
      },
    },
    {
      id: 1123,
      quantity: {
        amount: 2,
        unit: "",
      },
    },
    {
      id: 19296,
      quantity: {
        amount: 12,
        unit: "servings",
      },
    },
    {
      id: 16098,
      quantity: {
        amount: 12,
        unit: "servings",
      },
    },
    {
      id: 2047,
      quantity: {
        amount: 1,
        unit: "teaspoon",
      },
    },
    {
      id: 19335,
      quantity: {
        amount: 2,
        unit: "teaspoons",
      },
    },
  ],
  instructions: [
    {
      instruction: "Watch how to make this recipe.",
      number: 1,
    },
    {
      instruction:
        "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
      number: 2,
    },
    {
      instruction:
        "In another large bowl mix together all-purpose flour and buckwheat flour.",
      number: 3,
    },
    {
      instruction:
        "Slowly add flour into the wet ingredients mixing with a whisk.",
      number: 4,
    },
    {
      instruction:
        "Mix until there are no lumps and the batter is smooth and velvety.",
      number: 5,
    },
    {
      instruction:
        "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
      number: 6,
    },
    {
      instruction:
        "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
      number: 7,
    },
  ],
  name: "Elvis Pancakes",
  tags: ["side dish"],
};

const mockRecipeDataset = [recipe1, recipe2, recipe3, recipe4];

export {
  mockIngredients,
  mockRecipeDataset,
  recipe1,
  recipe2,
  recipe3,
  recipe4,
};
