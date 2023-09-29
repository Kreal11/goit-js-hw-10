// import axios from 'axios';

import { fetchBreeds } from './cat-api';

// axios.defaults.headers.common['x-api-key' =
//   'live_VOvT6IAsVg3apVKiZYzTEFlSsXzX8nEsF1JTdvq7UHoVVXUDRSRohjOihM0jsZDU';

const select = document.querySelector('.breed-select');
const divCat = document.querySelector('.cat-info');

select.addEventListener('change', onClickSelect);

function onClickSelect() {
  const selectedCat = select.value;
  fetchBreeds(selectedCat).then(catInfo => {
    renderPage(catInfo[0]);
  });
}

function renderPage({ url, name, description, temperament }) {
  const markup = `<img src="${url}" alt="cat image">
        <h2>${name}</h2>
        <p>${description}</p>
        <p>${temperament}</p`;

  divCat.innerHTML = markup;
}
