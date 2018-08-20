import React, { Component } from 'react';

import Aux from '../../../hoc/Auxi';
import classes from './HomeLayout.css';
import Toolbar from '../../../components/Homepage/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../components/Homepage/Navigation/SideDrawer/SideDrawer';

class HomeLayout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState( (prevState)  => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar
            drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default HomeLayout;
