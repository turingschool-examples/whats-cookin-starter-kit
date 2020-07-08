id in ingredients.js and recipes.js match up
multiply estimatedcost in cents by amt needed in recipe

- start with easy test files (ingredients, recipe)
- trickier = pantry, user

user story:
recipe - i should be able to filter recipes by type/tag

User is searching through array of recipeData's objects by tag to find if tags property (array) contains same value
--- array inside an object inside an array: truncatedRecipes[0][tags]

iterate through recipeList objects and find recipes which tags include searchedTag and add to a new array

conditional - if recipe tags property includes specified keyword, return those recipes
filter through array of objects to access properties -- get new array

condition - if recipe include ingredient specified, return those recipes

karen notes:
who should own each method?
-- script.js** where methods belong when it doesn't fit into a class -- make separate script-test.js file
-read through spec again
-build out user class using users.js file - what does User Class consist of

script - what is app doing?
what are methods doing and where are methods being called?
