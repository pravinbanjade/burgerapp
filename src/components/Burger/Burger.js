import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredient = Object.keys(props.ingredient).map( igKey => {
    return [...Array(props.ingredient[igKey])].map( (_,i) => {
      return <BurgerIngredient key={igKey + i} types={igKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient types="bread-top" />
      {transformedIngredient}
      <BurgerIngredient types="bread-bottom" />
    </div>
  )
}

export default burger;
