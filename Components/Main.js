import React from 'react';
import Dishes from './Dishes';

export default function Main(props) {
  const { dish, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Dishes</h2>
      <div className="row">
        {dishes.map((dish) => (
          <Dishes key={dish.id} dish={dish} onAdd={onAdd}></Dishes>
        ))}
      </div>
    </main>
  );
}
