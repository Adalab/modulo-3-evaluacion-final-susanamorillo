import PropTypes from 'prop-types';

const MovieSceneItem = ({ scene }) => {
  return (
    <div className='containerMovie'>
      <img className='movieImg' src={scene.poster} />
      <p>{scene.movie}</p>
      <p>{scene.year}</p>
      <p className='phrase'>{scene.fullLine}</p>
    </div>
  );
};
MovieSceneItem.propTypes = {
  scene: PropTypes.array.isRequired,
  poster: PropTypes.string.isRequired,
  movie: PropTypes.string.isRequired,
  fullLine: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieSceneItem;
