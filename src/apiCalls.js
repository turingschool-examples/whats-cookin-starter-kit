let fetchData = (endPoint) => {
    return fetch(`http://localhost:3001/api/v1/${endPoint}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

 export default fetchData;


//{ userID: <number>, ingredientID: <number>, ingredientModification: <number> }