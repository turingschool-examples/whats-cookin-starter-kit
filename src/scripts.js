import './styles.css';
import apiCalls from './apiCalls';
// Query Selectors
const viewRecipe = document.getElementById('viewRecipe')
const closeButton = document.getElementById('close')
const modalBox = document.getElementById('modalBox')

//Event Listeners
viewRecipe.addEventListener('click', () => {
  modalBox.classList.add('show')
})

closeButton.addEventListener('click', () => {
  modalBox.classList.remove('show')
})
//test this commit
//