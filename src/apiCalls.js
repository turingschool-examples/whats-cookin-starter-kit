let curUser 

const getUsers = () => {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
  .then((res) => {
    return res.json()
  })
  .then((data)=> {
    // console.log(data)
    return data
  })
}

const getRecipes = () => {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
  .then((res) => {
    return res.json()
  })
  .then((data)=> {
    // console.log(data)
    return data
  })
}

const getIngredients = () => {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
  .then((res) => {
    return res.json()
  })
  .then((data)=> {
    // console.log(data)
    return data
  })
}

export {getUsers, getRecipes, getIngredients}