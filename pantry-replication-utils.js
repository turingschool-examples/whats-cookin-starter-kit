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
function checkForRepeatedPantry(users) {
  return users.map(user => {
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
}

let usersWithRepeatedIngredients = checkForRepeatedPantry(users);
console.log("Users with repeated Ingredients: ", usersWithRepeatedIngredients);
console.log("Users with repeated Ingredients: ", usersWithRepeatedIngredients.map(user => user.id));

/*
 * Now I need to map back over the users and re-write their pantries with the values that I found from their repeats 
 *   for each user:
 *     create a new object with their name, id and pantry
 *     rewrite the pantry by FINDing their matching object in usersWithRepeatedIngredients (if it exists):
 *       For each ingredient key:
 *         make a new object with an ingredient property with the current key as a value, and an amount property with the foundUser[key] value as its value
 *      if the object isn't found, don't reset the pantry
 *      
 * */
let modifiedUsers = users.map(user => {
  let newUser = {
    name: user.name,
    id: user.id,
    pantry: []  
  };
  let foundUser = usersWithRepeatedIngredients.find(repeater => repeater.id === user.id);
  if (foundUser) {
    newUser.pantry = user.pantry.reduce((newPantry, item) => {
      console.log(typeof item.ingredient);
      const missingIngredients = Object.keys(foundUser.repeated);
      //console.log(missingIngredients);
      if (missingIngredients.includes(JSON.stringify(item.ingredient)) && !newPantry.find(_ingredient => _ingredient.ingredient === item.ingredient)) {
        newPantry.push({ingredient:item.ingredient, amount: foundUser.repeated[item.ingredient]})
      } 
      return newPantry;
    },[])
  }
  return newUser;
})
console.log(modifiedUsers)

let modifiedUsersWithRepeatedIngredients = checkForRepeatedPantry(modifiedUsers);

console.log("Modified users with repeated Ingredients: ", modifiedUsersWithRepeatedIngredients );
console.log("Modified users with repeated Ingredients: ", modifiedUsersWithRepeatedIngredients.map(user => user.id));

module.exports = modifiedUsers;
