let fetchData = (endPoint) => {
    return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${endPoint}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export default fetchData;

