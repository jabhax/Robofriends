import React from 'react';
import 'tachyons';


const Card = ({ id, name, username, email }) => {
  let colors = [
    'bg-light-red',
    'bg-light-blue',
    'bg-light-green',
    'bg-light-pink',
    'bg-light-yellow',
    'bg-light-purple',
    'bg-dark-red',
    'bg-dark-blue',
    'bg-dark-green',
    'bg-dark-pink'
  ];
  return (
    <div className={`tc ${ colors[id % colors.length] } dib br3 pa3 ma2 grow bw2 shadow-5`}>
      <img src={`https://robohash.org/${id}?500x500`} alt="robots"/>
      <div>
        <h2>{ name }</h2>
        <p>{ email }</p>
        <p>{ username }</p>
      </div>
    </div>
  );
}

export default Card;
