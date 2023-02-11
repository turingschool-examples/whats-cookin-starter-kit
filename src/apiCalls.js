
fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
    .then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.log(err)) 
    console.log(userApis)

fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))




    export default apiCalls