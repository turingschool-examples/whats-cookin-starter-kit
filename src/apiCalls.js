const fetchAPI = (dataType) => {
 return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${dataType}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => { 
      return data 
    })
    .catch(err => console.log(err));
}

export { fetchAPI }
