import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalcode: '',
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h1>Enter your Contact Info</h1>
        <form>
          <input type="text" className={classes.Input} name="name" placeholder="Your Name" autoComplete='name' />
          <input type="email" className={classes.Input} name="email" placeholder="Your Email" autoComplete='email' />
          <input type="text" className={classes.Input} name="street" placeholder="Street" autoComplete='address-line1' />
          <input type="text" className={classes.Input} name="postal" placeholder="Postal Code" autoComplete='postal-code' />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
