// Your fetch requests will live here!
fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));

fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));

fetch('Get all recipes	https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))


console.log('I will be a fetch request!')