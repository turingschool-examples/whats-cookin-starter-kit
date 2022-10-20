const rawCookieRecipe = {
  id: 595736,
  image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
  ingredients: [
    { id: 20081, quantity: { amount: 1.5, unit: "c" } },
    { id: 18372, quantity: { amount: 0.5, unit: "tsp" } },
  ],
  instructions: [
    {
      instruction: "Instruction for step 1 for Cookie Cups",
      number: 1,
    },
    {
      instruction: "Instruction for step 2 for Cookie Cups",
      number: 2,
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

const rawPorkChopsRecipe = {
  id: 678353,
  image: "https://spoonacular.com/recipeImages/678353-556x370.jpg",
  ingredients: [
    { id: 1009016, quantity: { amount: 1.5, unit: "cups" } },
    { id: 9003, quantity: { amount: 2, unit: "" } },
  ],
  instructions: [
    {
      instruction: "Instruction for step 1 for Pork Chops",
      number: 1,
    },
  ],
  name: "Maple Dijon Apple Cider Grilled Pork Chops",
  tags: ["lunch", "main course", "main dish", "dinner"],
};

const mockIngredientsData = [
  { id: 20081, name: "wheat flour", estimatedCostInCents: 142 },
  { id: 18372, name: "bicarbonate of soda", estimatedCostInCents: 582 },
  { id: 1009016, name: "apple cider", estimatedCostInCents: 468 },
  { id: 9003, name: "apple", estimatedCostInCents: 207 },
];

module.exports = { rawCookieRecipe, rawPorkChopsRecipe, mockIngredientsData };
