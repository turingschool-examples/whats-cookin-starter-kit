//NOTE: Data model and non-dom manipulating logic will live in this file.

// import './styles.css'
// import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import ingredientsData from './data/ingredients.js'

//Example of one way to import functions from the domUpdates file. You will delete these examples.
// import {exampleFunction1, exampleFunction2} from './domUpdates.js'

// exampleFunction1('heather')
// exampleFunction2('heather')
// console.log(ingredientsData)


// FILTER FUNCTION

const filterRecipes = (data, filterTerm) => {
  let filteredRecipes = data.filter((recipe) => {
     return recipe.tags.includes(filterTerm) || recipe.name === filterTerm
  })
  if(filteredRecipes.length === 0) {
    return 'Sorry, no matching results!'
  }
  return filteredRecipes
}

// 

export {filterRecipes}