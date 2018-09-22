import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';
// import Layout from '../../components/Layout/Layout';

class Auth extends Component {

  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
          autoComplete: 'email'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Enter Password',
          autoComplete: 'current-password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isSignUp: true
  }

  componentDidMount () {
        if ( !this.props.buildingBurger && this.props.authRedirectPath !== '/burgerapp' ) {
            this.props.onSetAuthRedirectPath();
        }
    }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
        [controlName]: updateObject(this.state.controls[controlName], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
            touched: true
        })
    });
    this.setState({ controls: updatedControls });
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
  }

  switchAuthModeHandler = () => {
      this.setState(prevState => {
          return { isSignUp: !prevState.isSignUp }
      });
  }

  render() {
    const formElementsArray = [];
    for(let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let form = formElementsArray.map(formElement => (
      <Input
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        key={formElement.id}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
    ));

    if(this.props.loading) {
        form = <Spinner />
    }

    let errorMessage = null;
    if(this.props.error) {
        errorMessage = (
            <p><span role="img" aria-label="jsx-a11y/accessible-emoji">😱</span> {this.props.error.message}</p>
        )
    }

    let authRedirect = null;
    if(this.props.isAuth) {
        authRedirect = <Redirect to={this.props.authRedirectPath} />
    }

    return(
        <div className={classes.Background}>
            <div className={classes.Auth}>
              { authRedirect }
              {errorMessage}
              <h3>{ this.state.isSignUp ? 'Sign up' : 'Login' } to Burger App <span role="img" aria-label="jsx-a11y/accessible-emoji">🍔</span></h3>
              <form onSubmit={this.submitHandler}>
                {form}
                <Button btnType="Success">SUBMIT</Button>
              </form>
              <hr style={{ borderColor: 'rgba(0,0,0,.1)' }} />
              <p>{ this.state.isSignUp ? 'Already' : 'Not' } a Member?</p>
              <Button
                  clicked={this.switchAuthModeHandler}
                  btnType="Danger">SWITCH TO { this.state.isSignUp ? 'SIGN IN' : 'SIGN UP' }</Button>
            </div>
            <Link to="/burgerapp"><Button>Back To Home</Button></Link>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    }
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/burgerapp' ) )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
