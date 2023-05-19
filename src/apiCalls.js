// Your fetch requests will live here!
let userTestData = []; 

 fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
.then(response => response.json())
.then(data => userTestData.push(data))
.catch(err => console.log(err))
console.log(userTestData)


// const loadUsers = () => 
