const fetchAPI = type => {
 return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${type}`)
    .then(response => response.json())
    .catch(err => console.log(err))
}

const savePromises = () => Promise.all([fetchAPI('users'), fetchAPI('recipes'), fetchAPI('ingredients')]);

export {
  savePromises
}