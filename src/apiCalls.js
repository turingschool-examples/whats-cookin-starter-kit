// Your fetch requests will live here!

const usersUrl = 'http://localhost:3001/api/v1/users'
const ingredientsUrl = 'http://localhost:3001/api/v1/ingredients'
const recipesUrl = 'http://localhost:3001/api/v1/recipes'
const requestProperties = {
  userID: /**/,
  ingredientID: /**/,
  ingredientModification: /**/
}
const samplePostProperties = {
  userID: 1,
  ingredientID: 11297,
  ingredientModification: -1
}

function andThen() {
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log('To err is human', err))
}

function getUsersData() {
  let fetchedUsers = fetch(usersUrl)
    andThen()
    return fetchedUsers
}

function getIngredientsData() {
  let fetchedIngredients = fetch(ingredientsUrl)
    andThen()
    return fetchedIngredients
}

function getRecipeData() {
  let fetchedRecipes = fetch(recipesUrl)
    andThen()
    return fetchedRecipes
}

function postData() {
  let postedData = fetch(usersUrl, {
    method: 'POST',
    body: JSON.stringify(samplePostProperties),
    headers: { 'content-type': 'application/json'}
  })
  andThen()
  return postedData
}

function deleteData() {
  let deletedData = fetch(usersUrl, {
    method: 'POST',
    body: JSON.stringify(),
    headers: { 'content-type': 'application/json'}
  })
  andThen()
  return deletedData
}
