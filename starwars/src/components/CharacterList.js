import React from 'react';
import { Character } from './Character';

export const CharacterList = ({ data }) => {
  return (
    <div className="list-container">
      {data.map(char => (
        <Character key={char.created} data={char} />
      ))}
    </div>
  );
};
