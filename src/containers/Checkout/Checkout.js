import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredient: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredient = {};
    for(let param of query.entries()) {
      ingredient[param[0]] = +param[1];
    }
    this.setState({ ingredient: ingredient });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return(
      <div>
        <CheckoutSummary
          ingredient={this.state.ingredient}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler} />
        <Route
          path={this.props.match.path  + '/contact-data'}
          component={ContactData} />
      </div>
    );
  }
}

export default Checkout;
