import PropTypes from 'prop-types';
import React from 'react';

const GamerFilter = ({ currentFilter, setCurrentFilter }) => {
  const handleCurrentFilter = () => {
    const selectedFilter = document.getElementById('game-filter').value;
    setCurrentFilter(selectedFilter);
  };

  return (
    <form>
      <label htmlFor="game-filter">
        Partidas:
        <select
          id="game-filter"
          defaultValue={currentFilter}
          data-testid="matches__option_show_finish_matches"
        >
          <option>A realizar</option>
          <option>Finalizado</option>
        </select>
      </label>
      <button
        data-testid="matches__search_match_btn"
        type="button"
        onClick={() => handleCurrentFilter()}
      >
        Buscar
      </button>
    </form>
  );
};

GamerFilter.propTypes = {
  currentFilter: PropTypes.string,
  setCurrentFilter: PropTypes.func,
}.isRequired;

export default GamerFilter;
