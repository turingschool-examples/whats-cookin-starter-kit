console.log('Hello world');
const nav = document.querySelector('#nav');
const userKitchen = document.querySelector('#userDropdown');

nav.addEventListener('click', navPress)

function navPress() {
  if (event.target.id === 'whatsCookin') {
    showKitchen()
  }
}


function showKitchen() {
  document.querySelector('#whatsCookin').classList.toggle("active");
  userKitchen.classList.toggle("collapsed");
  if (userKitchen.style.maxHeight) {
    userKitchen.style.maxHeight = null;
    userKitchen.style.height = null;
  } else {
    userKitchen.style.maxHeight = '275px';
    userKitchen.style.height = '275px';
  }
}
