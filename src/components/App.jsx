import { useEffect, useState } from 'react';
import ls from '../services/localStorage';
import { Routes, Route, Link } from 'react-router-dom';
import callToApi from '../services/api';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';

let years;

const App = () => {
  const [movieOwen, setMovieOwen] = useState(ls.get('scenes', []));
  const [searchMovies, setSearchMovies] = useState(ls.get('search', ''));
  const [yearMovies, setYearMovies] = useState('');

  useEffect(() => {
    if (movieOwen.length === 0) {
      callToApi().then((response) => {
        setMovieOwen(response);
        ls.set('search', searchMovies.toString()); // Fix this line
      });
    }
  }, [movieOwen.length, searchMovies]);

  const handleChangeMovie = (value) => {
    setSearchMovies(value);
    ls.set('search', value);
  };

  const handleChangeYear = (value) => {
    setYearMovies(value);
  };

  const filterScenes = movieOwen
    .filter(
      (scene) =>
        typeof searchMovies === 'string' &&
        scene.movie.toLowerCase().includes(searchMovies.toLowerCase())
    )
    .filter((itemscene) => {
      if (yearMovies === '') {
        return true;
      } else {
        return yearMovies === itemscene.year.toString();
      }
    });

  const getYears = () => {
    years = movieOwen.map((scene) => scene.year);
    const uniYears = new Set(years);
    const yearsArray = [...uniYears];
    return yearsArray.sort();
  };

  return (
    <>
      <header className='header'>
        <h1>Owen Wilson's "WOW"</h1>
      </header>
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <section>
                  <Filters
                    searchMovies={searchMovies.toString()} // Fix this line
                    handleChangeMovie={handleChangeMovie}
                    yearMovies={yearMovies}
                    handleChangeYear={handleChangeYear}
                    years={getYears()}
                  />
                </section>
                <section>
                  <MovieSceneList
                    filterScenes={filterScenes}
                    searchMovies={searchMovies}
                  />
                </section>
              </>
            }
          />
          <Route
            path='/scene/:id'
            element={
              <>
                <MovieSceneDetail movieOwen={movieOwen} />
                <Link to='/'>Back</Link>
              </>
            }
          />
          <Route path='*' element={<p>error</p>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
