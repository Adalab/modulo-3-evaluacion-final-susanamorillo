const MovieSceneItem = ({ scene }) => {
  return (
    <>
      <img className='movieImg' src={scene.poster} />
      <p>{scene.movie}</p>
      <p>{scene.year}</p>
      <p>{scene.fullLine}</p>
    </>
  );
};

export default MovieSceneItem;
