let fetchData = (endPoint) => {
    return fetch(`http://localhost:3001/api/v1/${endPoint}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

let postData = (itemToStock) => {
    fetch('http://localhost:3001/api/v1/users', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(itemToStock)
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error('Please select a valid ingredient and/or quantity.')
        }
        return response.json()
    })
    .then()
}

 export {fetchData, postData};


//{ userID: <number>, ingredientID: <number>, ingredientModification: <number> }