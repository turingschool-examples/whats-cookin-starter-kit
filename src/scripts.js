import './styles.css';
import apiCalls from './apiCalls';
// Query Selectors
const viewRecipe = document.getElementById('viewRecipe')
const closeButton = document.getElementById('close')

//Event Listeners
viewRecipe.addEventListener('click', () => {
  console.log('test')
})

const modalBox = (element) => toggle(element)

const toggle = (element) => element.classList.toggle('hidden') 