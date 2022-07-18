// Your fetch requests will live here!
export const apiCalls = {

  const recipePromise = fetchApiData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
  const ingredientPromise = fetchApiData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
  const userPromise = fetchApiData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")

  fetchApiData(url) {
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.log('API error: ${error.message}'));
  },

  getAllData() {
    const result =  Promise.all([recipePromise, ingredientPromise, userPromise])
      .then(responses => {
        return responses;
      })
    return result;  
  }
}


console.log('I will be a fetch request!')
