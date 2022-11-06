let fetchData = (endPoint) => {
    return fetch(`http://localhost:3001/api/v1/${endPoint}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

let reduceIngredientsFromCooking = (user, ingredient) => {
    return fetch('http://localhost:3001/api/v1/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "userID": user.id, "ingredientID": ingredient.id, "ingredientModification": -1 * ingredient.quantity.amount })
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('This are very up messed.')
            }
            return response.json()
        })
}

export { fetchData, reduceIngredientsFromCooking }


//{ userID: <number>, ingredientID: <number>, ingredientModification: <number> }