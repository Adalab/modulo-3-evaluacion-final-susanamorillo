import PropTypes from 'prop-types';

const Filters = ({
  searchMovies,
  yearMovies,
  handleChangeMovie,
  handleChangeYear,
  years,
}) => {
  const handleInputSearch = (ev) => {
    handleChangeMovie(ev.target.value);
  };
  const handleSelectYear = (ev) => {
    handleChangeYear(ev.target.value);
  };

  const renderOptions = years.map((year, index) => (
    <option key={index} value={year}>
      {year}
    </option>
  ));

  return (
    <form className='form'>
      <label htmlFor='search' className='searchMovie'>
        Movie:
        <input
          className='inputMovie'
          type='text'
          name='search'
          id='search'
          value={searchMovies}
          onChange={handleInputSearch}
        />
      </label>
      <label htmlFor='searchYear' className='searchYear'>
        Year:
        <select
          className='inputYear'
          name='year'
          id='year'
          value={yearMovies}
          onChange={handleSelectYear}
        >
          <option value=''>All</option>
          {renderOptions}
        </select>
      </label>
    </form>
  );
};

Filters.propTypes = {
  searchMovies: PropTypes.string.isRequired,
  yearMovies: PropTypes.string.isRequired,
  handleChangeMovie: PropTypes.func.isRequired,
  handleChangeYear: PropTypes.func.isRequired,
  years: PropTypes.array.isRequired,
};

export default Filters;
