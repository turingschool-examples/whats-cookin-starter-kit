const chai = require('chai');
// import {chai} from '../node_modules/chai/chai.js';
import { expect } from 'chai';
import { recipes } from '../src/data/filter-data.js';
import { filterRecipes } from '../src/scripts.js'

describe ('filter', function() {
  
  it('should return an array of filtered recipes by a tag', function() {
    let filteredRecipes = filterRecipes(recipes, 'salad')
    expect(filteredRecipes).to.be.deep.equal(
      [
        {
          "name": "Greek Salad",
          "tags": [
          "salad"
          ]
        },
        {
          "name": "Caesar Salad with Roasted Chicken",
          "tags": [
            "salad",
            "chicken"
          ]
        }
      ]
      )
  })

  
  it('should be able return an array of filtered recipes by a different tag', function() {
    let filteredRecipes = filterRecipes(recipes, 'side dish')
    expect(filteredRecipes).to.be.deep.equal(
      [
        {
          "name": "BBQ Chicken Pizza",
          "tags": [
            "side dish",
            "chicken"
          ]
        }
      ])
  })

  it('should be able return an array of filtered recipes by a name', function() {
    let filteredRecipes = filterRecipes(recipes, 'Greek Salad')
    expect(filteredRecipes).to.be.deep.equal(
      [
        {
          "name": "Greek Salad",
          "tags": [
            "salad"
          ]
        }
      ]
    )
  })
  
  it('should let the user know if there were no results found', function() {
    let filteredRecipes = filterRecipes(recipes, 'Plastic Garbage')
    expect(filteredRecipes).to.be.equal('Sorry, no matching results!')
  })

})