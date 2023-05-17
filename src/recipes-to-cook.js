const recipesToCook = (recipe) => {
  data.users.recipesToCook.push(recipe)
  data.users.forEach((user)=>{
    console.log(user.recipesToCook)
  })
}


