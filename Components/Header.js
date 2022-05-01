import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Digital Dinner</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            '0'
          )}
        </a>{' '}
        <a href="#/menu"> MenuIcon</a>
      </div>
    </header>
  );
}
