let apiCalls;

const userData = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
.then(response => response.json())
.then(data => data)
.catch(err => console.log(err))

const ingData = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
.then(response => response.json())
.then(data => data)
.catch(err => console.log(err))

const recData = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
.then(response => response.json())
.then(data => data)
.catch(err => console.log(err))

apiCalls = [userData, ingData, recData]

export default apiCalls











