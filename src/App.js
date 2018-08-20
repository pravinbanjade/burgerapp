import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import asyncComponent from './hoc/asyncComponent/asyncComponent';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import Home from './components/Homepage/Homepage';
import * as actions from './store/actions/index';

const asyncCheckout = asyncComponent(() => {
    return import('./containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(() => {
    return import('./containers/Orders/Orders');
});
const asyncAuth = asyncComponent(() => {
    return import('./containers/Auth/Auth');
});

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignUp();
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={asyncAuth} />
                <Route path="/burgerapp" exact component={BurgerBuilder} />
                <Route path="/" exact component={Home} />
                <Redirect to="/burgerapp" />
            </Switch>
        )

        if(this.props.isAuth) {
            routes = (
                <Switch>
                    <Route path="/checkout" component={asyncCheckout} />
                    <Route path="/orders" component={asyncOrders} />
                    <Route path="/auth" component={asyncAuth} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/burgerapp" exact component={BurgerBuilder} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/burgerapp" />
                </Switch>
            )
        }
        return (
            <BrowserRouter>
                    {routes}
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.checkAuthState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
