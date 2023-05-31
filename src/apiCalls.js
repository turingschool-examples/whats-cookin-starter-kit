const fetchAPI = (dataType) => {
 return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${dataType}`)
    .then((response) => {
      return response.json()
    })
    .catch(() => alert('ERROR: FAILED TO FETCH!'));
}

export { fetchAPI }
