// Your fetch requests will live here!

import { getRandomUser } from "./users"
let currentUser = {};

const assignCurrentUser = () => {
  fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(users => {
      currentUser = getRandomUser(users.users);
    })
    .catch(error => {
      console.error(error)
    })
}
  
export {assignCurrentUser, currentUser}
