console.log('Hello world');
const { recipeData } = require('../data/recipes');

var singleInstruction = recipeData.filter(recipe => recipe.instructions.length < 2)

console.log(singleInstruction);
