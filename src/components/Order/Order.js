import React from 'react';

import classes from './Order.css';
import Burger from '../Burger/Burger';

const order = (props) => {
  const ingredient = [];
  for(let ingredientName in props.ingredient) {
    ingredient.push({
      name: ingredientName,
      amount: props.ingredient[ingredientName]
    });
  }

  const ingredientOutput = ingredient.map(ig => (
    <span
      key={ig.name}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '4px',
        cursor: 'default'
      }}>{ig.name} ({ig.amount})</span>
  ));

  return (
        <div className={classes.Order}>
            <div className={classes.Ingredients}>
                <p>Ingredients: {ingredientOutput}</p>
                <p>Price: <strong>NRS {props.price.toFixed(2)}</strong></p>
            </div>
            <div className={classes.Burger}>
                <Burger ingredient={props.ingredient} />
            </div>
            {
                // <div className={classes.Close}></div>
            }
        </div>
  )
}

export default order;
