import { useLocation, matchPath } from 'react-router';
import { Link } from 'react-router-dom';

const MovieSceneDetail = ({ movieOwen }) => {
  const { pathname } = useLocation();
  const routeData = matchPath('/scene/:id', pathname);
  const sceneId = routeData !== null ? routeData.params.id : '';
  const scene = movieOwen.find((scene) => scene.id === sceneId);
  if (scene === undefined) {
    return <p>No se encuentra</p>;
  }

  return (
    <>
      <article>
        <img className = "imgPreview"src={scene.poster} alt={`${scene.poster} poster`} />
        <h1>{scene.movie}</h1>
        <p>{scene.fullLine}</p>
        <p>Director: {scene.director}</p>
        <p>{scene.year}</p>
        <Link target='_blank' to={scene.audio}>
          Escucha aquí
        </Link>
      </article>
    </>
  );
};
export default MovieSceneDetail;
