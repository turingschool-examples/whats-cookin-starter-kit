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
    })
  return  userInfo//let userPantry =
  }

  getPantry(userId) {
    //return this.userCatalog.find(user => userId === user.id)
    let userInfo = this.userCatalog.find(user => userId === user.id)
    return userInfo.pantry
   }

}

export default UserRepo
