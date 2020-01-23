let data = [require('./data/ingredients'), require('./data/users'), require('./data/recipes')];
const [ingredients, users, recipes ] = data;
data = {
  ingredients: ingredients,
  users: users,
  recipes: recipes,
};


//users.push({name:" Tester", id:1000, pantry:[{id:1}, {id: 56787654567876545678}, {id: "ketchup"}]});

/*
 * loop through the users array (map?)
 *   for every user, make a new object with their name, id and an array of all missing ingredient ids
 *   (filter ids by whether the ingredients array can FIND any igredients with their ID)
 *   
 * filter the mapped array based on whether the missing property is empty
 * */

let usersWithMissingIngredients = users.map(user => {
  let analyzedUser = {
    name: user.name,
    id: user.id,
    missing: []
  };
  analyzedUser.missing = user.pantry.filter(pantryItem => {
    return !ingredients.find(ingredient => ingredient.id === pantryItem.id)
  })
  return analyzedUser;
}).filter(user => user.missing.length)

console.log("Users with missing Ingredients: ", usersWithMissingIngredients);

