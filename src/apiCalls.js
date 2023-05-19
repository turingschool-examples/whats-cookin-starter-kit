

const fetchUsers = () => {
 return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .catch(err => console.log(err))
}


export {
  fetchUsers
}