import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICE = {
  salad: 30,
  cheese: 40,
  meat: 50,
  bacon: 35
}

class BurgerBuilder extends Component {
  state = {
    ingredient : null,
    totalPrice: 30,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    axios.get('https://react-burger-builder-786.firebaseio.com/ingredient.json')
      .then( res => {
        this.setState({ ingredient: res.data });
      })
      .catch( error => {
        this.setState({ error: true })
      });
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

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }
  purchaseSuccessHandler = () => {
    // alert("Woohoo! Your Order is Complete.");
    this.setState({ loading: true });
    const order = {
        ingredient: this.state.ingredient,
        price: this.state.totalPrice,
        customer: {
            name: 'Pravin Banjade',
            address: {
                street: 'Test Street',
                zipCode: '42202',
                country: 'Nepal'
            },
            email: 'test@test.com',
            phone: '9865258563'
        },
        deliveryMethod: 'fastest'
    };

    axios.post('/orders.json', order)
        .then( response => {
          this.setState({ loading: false, purchasing: false });
        })
        .catch( error => {
          this.setState({ loading: false, purchasing: false });
        });

    this.props.history.push('/checkout');
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredient
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded.</p> : <Spinner />
    if(this.state.ingredient) {
      burger = (
        <Aux>
          <Burger ingredient={this.state.ingredient} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
          />
        </Aux>
      );
      orderSummary = <OrderSummary
        ingredient={this.state.ingredient}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseSucceed={this.purchaseSuccessHandler}
        price={this.state.totalPrice} />;
    }
    if(this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios);
