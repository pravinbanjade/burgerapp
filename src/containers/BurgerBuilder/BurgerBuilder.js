import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredient : {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredient={this.state.ingredient} />
        <div>Burger Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder;
