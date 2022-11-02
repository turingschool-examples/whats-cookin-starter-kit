// Your fetch requests will live here!

const usersUrl = 'http://localhost:3001/api/v1/users'
const ingredientsUrl = 'http://localhost:3001/api/v1/ingredients'
const recipesUrl = 'http://localhost:3001/api/v1/recipes'
// const urlList = [usersUrl, ingredientsUrl, recipesUrl]

function getUsersData() {
  let fetchedUsers = fetch(usersUrl)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log('To err is human', err));
    return fetchedUsers
}

function getIngredientsData() {
  let fetchedIngredients = fetch(ingredientsUrl)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log('To err is human', err));
    return fetchedIngredients
}

function getRecipeData() {
  let fetchedRecipes = fetch(recipesUrl)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log('To err is human', err));
    return fetchedRecipes
}
// export const getUsersAPIData = fetch(
//   "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users"
// )
//   .then((response) => response.json())
//   .catch((err) => console.log(err));
//
// export const getRecipesAPIData = fetch(
//   "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes"
// )
//   .then((response) => response.json())
//   .catch((err) => console.log(err));
//
// export const getIngredientsAPIData = fetch(
//   "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients"
// )
//   .then((response) => response.json())
//   .catch((err) => console.log(err));
