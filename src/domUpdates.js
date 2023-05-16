//NOTE: Your DOM manipulation will occur in this file

const viewAll = document.querySelector('.categories__all');

viewAll.addEventListener('click', () => {

})


const show = (names, section) => {
  names.forEach((name) => {
    name.classList.remove(section);
  })
};

const hide = (names, section) => {
  names.forEach((name) => {
    name.classList.add(section);
  })
};