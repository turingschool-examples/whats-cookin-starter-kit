let data = [require('./data/ingredients'), require('./data/users'), require('./data/recipes')];
const [ingredients, users, recipes ] = data;
data = {
  ingredients: ingredients,
  users: users,
  recipes: recipes,
//  test: [{id:1}, {id:1}, {id:4}, {id: 10}, {id:4}]
};

const datasetNames = Object.keys(data);
const analyzedRepeats = datasetNames.reduce((analyzedByRepeats, dataset) => {
  analyzedByRepeats[dataset] = [];
  data[dataset].forEach((datum, index, array) => {
    let currentId = datum.id;
    let dataWithSameId = array.filter(element => element.id === currentId);
    if (dataWithSameId.length > 1 && !analyzedByRepeats[dataset].includes(currentId)) {
      analyzedByRepeats[dataset].push(currentId);
    }
  })
  return analyzedByRepeats;
}, {})

console.log('repeatedIds: ', analyzedRepeats);
