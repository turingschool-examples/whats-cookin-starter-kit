import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import { ingredientsData } from './data/ingredients'
import { recipeData } from './data/recipes'

import Glide from '@glidejs/glide'

import "/node_modules/@glidejs/glide/dist/css/glide.core.min.css"
import "/node_modules/@glidejs/glide/dist/css/glide.theme.min.css"

import RecipeRepository from './classes/RecipeRepository.js'

import Recipe from './classes/recipe'

const config = {
    type:'carousel',
    perView: 3
}

new Glide('.glide', config).mount()

let recipeRepository = new RecipeRepository(recipeData)

// const recipe = new Recipe(recipeData, ingredientsData)
//instatiate a new recipe using data sets as arguments?
//for each recipe that we are passing through from the data, create new recipe instance
