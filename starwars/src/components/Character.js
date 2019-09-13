import React from 'react';

export const Character = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>
        <span>Hair Color: </span>
        {data.hair_color}
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
  );
};
