class UserRepo {
  constructor(userCatalog) {
    this.userCatalog = userCatalog

  }

/*
get single user by id
if single user id matches user id in user array
  then return user pantry
*/

  getUserInfo(userId) {
    let userInfo = this.userCatalog.find(user => {
      userId === user.id
      return user
      //console.log('user pantry:' , user.pantry)

      //return user.pantry
      //if(user.id === this.userCatalog)
      //return user.pantry
    })

  return  userInfo//let userPantry =
  }

}

export default UserRepo
