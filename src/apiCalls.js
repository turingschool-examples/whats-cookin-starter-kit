// Your fetch requests will live here!
fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users").then(response => response.json()).then(data => console.log(data.users.forEach((user)=>{
  console.log(user.recipesToCook)
})))

console.log('I will be a fetch request!')