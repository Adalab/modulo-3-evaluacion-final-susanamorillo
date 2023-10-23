import uuid from 'react-uuid';

const callToApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((response) => {
      const scenes = response.map((scenes) => ({
        poster: scenes.poster,
        movie: scenes.movie,
        fullLine: scenes.full_line,
        year: scenes.year,
        audio: scenes.audio,
        director: scenes.director,
        id: uuid(),
      }));

      return scenes;
    });
};

export default callToApi;
