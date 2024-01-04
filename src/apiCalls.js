const promises = [
  fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes').then(res => res.json()),
  fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients').then(res => res.json()),
  fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users').then(res => res.json())
];

export const getAllData = () => {
  return Promise.all(promises)
};
