import MovieSceneItem from './MovieSceneItem';
import { Link } from 'react-router-dom';

const MovieSceneList = ({ filterScenes, searchMovies }) => {
  if (filterScenes.length === 0) {
    return (
      <p className='errorSearch'>
        {' '}
        no aparece {searchMovies}. ¡Prueba con otro título!
      </p>
    );
  }
  const orderList = [...filterScenes].sort((a, b) =>
    a.movie.localeCompare(b.movie)
  );
  const renderList = orderList.map((scene) => {
    return (
      <Link key={scene.id} to={'/scene/' + scene.id} className='card-a'>
        <li className='card' key={scene.id}>
          <MovieSceneItem scene={scene} />
        </li>
      </Link>
    );
  });

  return <ul>{renderList}</ul>;
};
export default MovieSceneList;
