import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredient).map( igKey => {
    return [...Array(props.ingredient[igKey])].map( (_,i) => {
      return <BurgerIngredient key={igKey + i} types={igKey} />;
    });
  }).reduce( (arr, el) => {
    return arr.concat(el)
  }, [])
  if(transformedIngredient.length === 0) {
    transformedIngredient = <p>Please! Add some Ingredients <span role="img" aria-label="jsx-a11y/accessible-emoji">🙂</span></p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient types="bread-top" />
      {transformedIngredient}
      <BurgerIngredient types="bread-bottom" />
    </div>
  )
}

export default burger;
