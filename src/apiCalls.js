let apiCalls;

const userData = fetch('http://localhost:3001/api/v1/users')
.then(response => response.json())
.then(data => data)
.catch(err => alert(`Server Error: ${err}. Please try again later.`))

const ingData = fetch('	http://localhost:3001/api/v1/ingredients')
.then(response => response.json())
.then(data => data)

const recData = fetch('http://localhost:3001/api/v1/recipes')
.then(response => response.json())
.then(data => data)

apiCalls = [userData, ingData, recData]


function saveFavorites(myRecipe, myUser) {
    fetch('http://localhost:3001/api/v1/usersRecipes', {
        method: 'POST',
        body: JSON.stringify({ userID: myUser.id, recipeID: myRecipe }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => alert(`Server Error: ${err}. Please try again later.`))
}

export { apiCalls, saveFavorites }











