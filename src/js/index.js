import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');
const divCat = document.querySelector('.cat-info');

select.addEventListener('change', onChangeSelect);

fetchBreeds().then(response => {
  const markup = response
    .map(cat => {
      return `<option value="${cat.id}">${cat.name}</option>`;
    })
    .join('');
  select.innerHTML = markup;
});

function onChangeSelect() {
  const selectedCat = select.value;
  fetchCatByBreed(selectedCat).then(catInfo => {
    renderPage(catInfo);
  });
}

function renderPage(info) {
  const markup = `<img src="${info[0].url}" alt="cat image" width = 600 height = 400>
        <h2>${info[0].breeds[0].name}</h2>
        <p>${info[0].breeds[0].description}</p>
        <p>${info[0].breeds[0].temperament}</p>`;

  divCat.innerHTML = markup;
}
