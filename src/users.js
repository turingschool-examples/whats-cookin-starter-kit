const getRandomIndex = (usersLength) => {
 return Math.floor(Math.random() * usersLength)
}
const getRandomUser = (userData) => {
  return userData.users[getRandomIndex(userData.users.length)]
}

export { getRandomUser, getRandomIndex}