import React from 'react';
import { Character } from './Character';
import styled from 'styled-components';

const CharactersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const CharacterList = ({ data }) => {
  return (
    <CharactersContainer className="list-container">
      {data.map(char => (
        <Character key={char.created} data={char} />
      ))}
    </CharactersContainer>
  );
};
