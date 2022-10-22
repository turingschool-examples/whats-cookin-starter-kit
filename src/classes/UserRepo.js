class UserRepo {
  constructor(userCatalog) {
    this.userCatalog = userCatalog

  }

  getUserInfo(userId) {
    let userInfo = this.userCatalog.find(user => {
      userId === user.id
      return user
    })
  return  userInfo
  }

  getPantry(userId) {
    let userInfo = this.userCatalog.find(user => userId === user.id)
    return userInfo.pantry
   }

}

export default UserRepo
