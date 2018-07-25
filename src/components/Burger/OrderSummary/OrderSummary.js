import React from 'react';

import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredient).map( igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform : 'capitalize' }}>{igKey}</span> : {props.ingredient[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredient:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseSucceed}>CONFIRM</Button>
    </Aux>
  )
}

export default orderSummary;
