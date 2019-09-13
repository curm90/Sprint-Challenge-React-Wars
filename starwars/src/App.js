import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './components/StarWars.css';
import { CharacterList } from './components/CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${currentPage}`)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  }, [currentPage]);

  const nextButton = () => {
    if (currentPage < 9) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevButton = () => {
    if (currentPage === 1) return;
    return setCurrentPage(currentPage - 1);
  };

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList data={characters} />
      <div className="button-container">
        <button onClick={() => prevButton()} className="prevBtn">
          prev
        </button>
        <p className="page">Page {currentPage}</p>
        <button onClick={() => nextButton()} className="nextBtn">
          next
        </button>
      </div>
    </div>
  );
};

export default App;
