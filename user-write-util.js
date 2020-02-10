const cleanedUsers = require('./pantry-replication-utils.js');
const fs = require('fs');

fs.writeFile('./data/users.js', JSON.stringify(cleanedUsers), function(error){
  if (error) {
    throw error;
  } else {
    console.log('File written');
  };
});
