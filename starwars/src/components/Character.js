import React from 'react';
import styled from 'styled-components';
import logo from '../images/sabers.png';

const CharacterCard = styled.div`
  width: 500px;
  padding: 1rem 0;
  margin: 1rem 0;
  background: #dbdac9;
  border-radius: 10px;
  box-shadow: 2px 2px 3px black;
  transition: ease-in-out 0.12s;

  &:hover {
    transform: scale(1.02);
    transition: ease-in-out 0.12s;
    box-shadow: 1px 4px 6px black;
  }

  @media (max-width: 500px) {
    width: 90%;
  }

  h2 {
    color: #232322;
    font-size: 2rem;
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    color: #232322;
  }

  .icon {
    height: 50px;
    padding-top: 3rem;
  }
`;

export const Character = ({ data }) => {
  return (
    <CharacterCard>
      <h2>{data.name}</h2>
      <p>
        <span>Hair Color: </span>
        {data.hair_color}
      </p>
      <p>
        <span>Eye Color: {data.eye_color}</span>
      </p>
      <p>
        <span>Gender: {data.gender}</span>
      </p>
      <p>
        <span>Weight: </span>
        {data.mass} Kg
      </p>
      <p>
        <span>Height: </span>
        {data.height} cm
      </p>
      <p>
        <span>DOB: </span>
        {data.birth_year}
      </p>
      <img className="icon" src={logo} alt="lightsabers"></img>
    </CharacterCard>
  );
};
