const getData = (type) => {
  if (!['ingredients', 'users', 'recipes'].includes(type)) {
    throw new Error("check spelling")
  }
    return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${type}`)
      .then((response => response.json()))
      .then((data) => { return data })
}

const getDataPromises = () => {
  Promise.all([
  getData('recipes'),
  getData('users'),
  getData('ingredients')
]).then(([recipes, users, ingredients]) => {
  console.log('recipes: ', recipes)
  console.log('users: ', users)
  console.log('ingredients: ', ingredients)
})
}

export {
  getData
}