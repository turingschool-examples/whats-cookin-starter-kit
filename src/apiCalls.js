// Your fetch requests will live here!
const userData = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users').then(response => response.json())

const recipeData = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes').then(response => response.json())

const ingredientData = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients').then(response => response.json())

let apiCalls = Promise.all([userData, recipeData, ingredientData])

export default apiCalls;
