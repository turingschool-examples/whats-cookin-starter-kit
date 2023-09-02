// Your fetch requests will live here!


console.log('I will be a fetch request!')

let usersFetch = []

const fetchUsers = () => {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
    .then(response => response.json())
    .then(data => {
      
      let usersInfo = data.users
      usersInfo.forEach(user => {
      usersFetch.push(user)
        })

      console.log("log data:", data); // Log the fetched data
       console.log("data users", data.users)
      return usersFetch
    });
};

export {
  fetchUsers,
  usersFetch
};



  



