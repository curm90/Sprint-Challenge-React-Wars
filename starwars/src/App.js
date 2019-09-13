import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { CharacterList } from './components/CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList data={characters} />
    </div>
  );
};

export default App;
