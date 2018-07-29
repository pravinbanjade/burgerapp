import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalcode: '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
        ingredient: this.props.ingredient,
        price: this.props.price,
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
          this.setState({ loading: false });
          this.props.history.push('/');
        })
        .catch( error => {
          this.setState({ loading: false });
        });
  }

  render() {
    let form = (
      <form>
        <input type="text" className={classes.Input} name="name" placeholder="Your Name" autoComplete='name' />
        <input type="email" className={classes.Input} name="email" placeholder="Your Email" autoComplete='email' />
        <input type="text" className={classes.Input} name="street" placeholder="Street" autoComplete='address-line1' />
        <input type="text" className={classes.Input} name="postal" placeholder="Postal Code" autoComplete='postal-code' />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if(this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h1>Enter your Contact Info</h1>
        {form}
      </div>
    );
  }
}

export default ContactData;
