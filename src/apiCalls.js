// Your fetch requests will live here!
fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })


console.log('I will be a fetch request!')

fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })