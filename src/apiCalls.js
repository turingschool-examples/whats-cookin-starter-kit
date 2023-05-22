const getData = (type) => {
  if (!['ingredients', 'users', 'recipes'].includes(type)) {
    throw new Error("check spelling")
  }
    return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${type}`)
      .then((response => response.json()))
      .then((data) => { return data })
}

export {
  getData
}