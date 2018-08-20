import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>HOME</NavigationItem>
        <NavigationItem link="#">ABOUT</NavigationItem>
        <NavigationItem link="#">SKILLS</NavigationItem>
        <NavigationItem link="#">PROJECT</NavigationItem>
        <NavigationItem link="/burgerapp">BURGER APP</NavigationItem>
    </ul>
);

export default navigationItems;
