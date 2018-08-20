import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import Layout from '../../components/Layout/Layout';

class Checkout extends Component {

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let summary = <Redirect to='/burgerapp' />
    if(this.props.ings) {
      const purchasedRedirect = this.props.purchased ? <Redirect to="/burgerapp" /> : null;
      summary = (
        <div>
          { purchasedRedirect }
          <CheckoutSummary
            ingredient={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler} />
          <Route
            path={this.props.match.path  + '/contact-data'}
            component={ContactData} />
        </div>
      );
    }
    return (
        <Layout>
            {summary}
        </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredient,
    purchased: state.order.purchased
  }
}

export default connect(mapStateToProps)(Checkout);
