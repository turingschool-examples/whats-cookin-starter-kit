export const apiCalls = {
  fetchData() {
    const result = Promise.all([apiCalls.getAllData('recipes'), apiCalls.getAllData('ingredients'), apiCalls.getAllData('users')])
    .then(responses => {
      return responses
    });
    return result;
  },
  getAllData(endpoint) {
    const root = 'http://localhost:3001/api/v1/'
    const url = `${root}${endpoint}`
    return fetch(url)
    .then(response => response.json());
  },
  addToPantry(newIngredient) {
     const url = 'http://localhost:3001/api/v1/users'
     fetch( url, {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       // We need to define newIngredient object in a function?
       body: JSON.stringify(newIngredient)
     })
     .then(response => {
       console.log('POST response', response)
       //throw an error to trigger the catch
     })
   }
  //When a user adds a recipe to the favorites list, another button "Cook Recipe",
  // will display next to the "remove button" on the page.
   // Create a Cook Recipe button
   // When the button is clicked, the ui will send a POST request
   //
  // Create a post request
}
