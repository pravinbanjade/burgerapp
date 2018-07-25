import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
  salad: 30,
  cheese: 40,
  meat: 50,
  bacon: 35
}

class BurgerBuilder extends Component {
  state = {
    ingredient : {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 30,
    purchasable: false
  }

  updatePurchaseState(ingredient) {
    const sum = Object.keys(ingredient).map( igKey => {
      return ingredient[igKey];
    }).reduce( (sum, el) => {
      return sum + el;
    },0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (types) => {
    const oldCount = this.state.ingredient[types];
    const updateCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredient
    }
    updatedIngredient[types] = updateCount;
    const priceAddition = INGREDIENT_PRICE[types];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.updatePurchaseState(updatedIngredient);
    this.setState({totalPrice: newPrice, ingredient: updatedIngredient});
  }

  removeIngredientHandler = (types) => {
    const oldCount = this.state.ingredient[types];
    if(oldCount <= 0) {
      return ;
    }
    const updateCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredient
    }
    updatedIngredient[types] = updateCount;
    const priceDeduction = INGREDIENT_PRICE[types];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.updatePurchaseState(updatedIngredient);
    this.setState({totalPrice: newPrice, ingredient: updatedIngredient});
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredient
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal>
          <OrderSummary ingredient={this.state.ingredient} />
        </Modal>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;
