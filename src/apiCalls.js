const fetchAPI = (dataType) => {
 return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      return response.json()
    })
    .catch(err => errorHandling(err));
}

const errorHandling = err => {
  alert(`${err.name}: ${err.message}!\nWhat's Cookin failed to obtain data from the server.`)
}

const postAPI = (user) => {
  fetch('http://localhost:3001/api/v1/usersRecipes', {
    method:'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if(data.message.includes('already')) {
      throw new Error('Recipe already saved!');
    }
  })
  .catch((err) => alert(err))
}

export { fetchAPI, postAPI }
