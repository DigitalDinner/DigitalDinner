import React from 'react';

export default function Dishes(props) {
  const { dish, onAdd } = props;
  return (
    <div>
        <img className="small" src={dish.image} alt={dish.name} />
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <div>${dish.price}</div>
        <div>
            <button onClick={() => onAdd(dish)}>Add To Cart</button>
        </div>
    </div>
  );
}
