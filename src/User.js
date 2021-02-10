const data = require('../data/users.js');
const usersData = data.usersData;
const userData = usersData.sort((a,b) => {return 0.5 - Math.random()})[0];

class User {
  constructor(userData) {
    this.user = userData
    //console.log(this.user)
    this.name = userData.name;
    this.id = userData.id;
    this.pantry = userData.pantry;
    this.favorites = [];
    this.planned = [];
  }
}

module.exports = User;
