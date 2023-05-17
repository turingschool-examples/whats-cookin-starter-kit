const getRandomIndex = (usersLength) => {
 return Math.floor(Math.random() * usersLength)
}
const getRandomUser = (userData) => {
  console.log(userData.users[getRandomIndex(userData.users.length)])
  return userData.users[getRandomIndex(userData.users.length)]
}


export { getRandomUser, getRandomIndex}