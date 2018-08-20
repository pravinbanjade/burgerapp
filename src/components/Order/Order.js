import React from 'react';

import classes from './Order.css';
import Layout from '../Layout/Layout';

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
      <Layout>
          <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>NRS {props.price.toFixed(2)}</strong></p>
          </div>
      </Layout>
  )
}

export default order;
