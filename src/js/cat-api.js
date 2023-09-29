export function fetchBreeds(catId) {
  const BASE_URL = 'https://api.thecatapi.com';
  const END_POINT = '/v1/images/search';
  const PARAMS = `?breed_ids=${catId}`;
  const url = `${BASE_URL}${END_POINT}${PARAMS}`;

  const options = {
    headers: {
      'x-api-key':
        'live_VOvT6IAsVg3apVKiZYzTEFlSsXzX8nEsF1JTdvq7UHoVVXUDRSRohjOihM0jsZDU',
    },
  };

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
