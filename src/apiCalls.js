// Your fetch requests will live here!


console.log('I will be a fetch request!')


const fetchUsers = (fn) => {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
    .then(response => response.json())
    .then(data => {
      console.log("fetch user")
      return fn(data.users);
      // returning a fn(getRandomUser) passing the API data as an argument
      // let usersInfo = data.users
      // usersInfo.forEach(user => {
      
      /*
        usersFetch.push(user)
        })

      console.log("log data:", data); // Log the fetched data
       console.log("data users", data.users)
      return usersFetch*/
    });
};


const fetchRecipes = (fn) => {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
    .then(response => response.json())
    .then(data => {
      console.log("fetch recipe", data.recipes)
      return fn(data.recipes);
      // returning a fn(getRandomUser) passing the API data as an argument
      // let usersInfo = data.users
      // usersInfo.forEach(user => {
      
      /*
        usersFetch.push(user)
        })

      console.log("log data:", data); // Log the fetched data
       console.log("data users", data.users)
      return usersFetch*/
    });
};


export {
  fetchUsers,
  fetchRecipes
};



  



