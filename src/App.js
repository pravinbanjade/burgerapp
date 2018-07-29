import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
