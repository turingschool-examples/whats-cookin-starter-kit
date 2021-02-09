const data = require('../data/users.js');
const usersData = users.usersData;

class User {
  constructor(usersData) {
    this.user = usersData.sort((a,b) => {return 0.5 - math.random()});
    
  }
}

module.exports = User;
