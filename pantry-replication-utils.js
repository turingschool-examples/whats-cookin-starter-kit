let data = [require('./data/ingredients'), require('./data/users'), require('./data/recipes')];
const [ingredients, users, recipes ] = data;
data = {
  ingredients: ingredients,
  users: users,
  recipes: recipes,
};


users.push({name:" Tester", id:1000, pantry:[{ingredient:1}, {ingredient: 56787654567876545678}, {ingredient:1}]});

/*
 * loop through the users array (map?)
 *  for each user, make a new object with their id and an  object of repeats
 *  to make the object of repeats, reduce over the user's pantry
 *    make a dictionary with the count of each ingredient id 
 *    take the keys of that object and filter them by the value of the dictionary 
 *  make a new obejct with the counts of only the repeated elements 
 *   
 *   
 * 
 * */

let usersWithRepeatedIngredients = users.map(user => {
  let analyzedUser = {
    id: user.id,
    repeated:{}
  };
  let countedItems = user.pantry.reduce((acc, pantryItem) => {
    if (!acc[pantryItem.ingredient]) {
      acc[pantryItem.ingredient] = 0
    };
    acc[pantryItem.ingredient]++;
    return acc;
  }, {})
  let repeatedItems = Object.keys(countedItems).filter(item => countedItems[item] > 1);
  analyzedUser.repeated = repeatedItems.reduce((acc, item) => {
    acc[item] = countedItems[item];
    return acc;
  },{})
  return analyzedUser;
}).filter(user => Object.keys(user.repeated).length)

console.log("Users with repeated Ingredients: ", usersWithRepeatedIngredients);
console.log("Users with repeated Ingredients: ", usersWithRepeatedIngredients.map(user => user.id));

//let recipesWithMissingIngredients = recipes.map(recipe => {
//  let analyzedRecipe = {
//    id: recipe.id,
//    missing: []
//  };
//  analyzedRecipe.missing = recipe.ingredients.filter(recipeIngredient => {
//    return !ingredients.find(ingredient => ingredient.id === recipeIngredient.id)
//  }).map(ingredient => ingredient.id);
//  return analyzedRecipe;
//}).filter(recipe => recipe.missing.length)
//
//
//console.log("Recipes with missing ingredients: ", recipesWithMissingIngredients);
