import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Layout from '../../components/Layout/Layout';

class BurgerBuilder extends Component {
  state = {
    purchasing: false
  }

  componentDidMount() {
    this.props.onInitIngredients()
  }

  updatePurchaseState(ingredient) {
    const sum = Object.keys(ingredient).map( igKey => {
      return ingredient[igKey];
    }).reduce( (sum, el) => {
      return sum + el;
    },0);
    return sum > 0;
  }

  purchaseHandler = () => {
      if(this.props.isAuth) {
          this.setState({purchasing: true});
      } else {
          this.props.onSetAuthRedirectPath('/checkout');
          this.props.history.push('/auth');
      }
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }
  purchaseSuccessHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  }

  render() {
    const disabledInfo = {
      ...this.props.ings
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.props.error ? <p>Ingredients can't be loaded.</p> : <Spinner />
    if(this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredient={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            ordered={this.purchaseHandler}
            isAuth={this.props.isAuth}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
          />
        </Aux>
      );
      orderSummary = <OrderSummary
        ingredient={this.props.ings}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseSucceed={this.purchaseSuccessHandler}
        price={this.props.price} />;
    }
    return (
      <Layout>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredient,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
