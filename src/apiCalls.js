
const fetchData = (url) => {
   return fetch(url)
    .then(response => response.json())
}

const fetchAll = () => {
   return Promise.all([
    fetchData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users"),
    fetchData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients"),
    fetchData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
])
}
    export default fetchAll