import React from 'react';
import styled from 'styled-components';
import logo from '../images/sabers.png';

const CharacterCard = styled.div`
  width: 480px;
  padding: 1rem 0;
  margin: 1rem 0;
  background: #dbdac9;
  border-radius: 10px;
  box-shadow: 3px 4px 12px black;
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

  .info {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between;
    align-items: center; */
    padding: 0 2rem;

    p {
      font-size: 1.3rem;
      color: #232322;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid black;
      padding-bottom: 1rem;
    }
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
      <div className="info">
        <p>
          <span>Hair Color: </span>
          {data.hair_color}
        </p>
        <p>
          <span>Eye Color: </span>
          {data.eye_color}
        </p>
        <p>
          <span>Gender: </span>
          {data.gender}
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
      </div>
      <img className="icon" src={logo} alt="lightsabers"></img>
    </CharacterCard>
  );
};
