import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient types="bread-top" />
      <BurgerIngredient types="meat" />
      <BurgerIngredient types="cheese" />
      <BurgerIngredient types="bread-bottom" />
    </div>
  )
}

export default burger;
