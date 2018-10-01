import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Footer.css';

const footer = () => (
    <div className={classes.Footer}>
        <Link to='/'><p>Home</p></Link>
        <Link to='/burgerapp'><p>Burger Builder</p></Link>
        <p className={classes.Copy}>&copy; {new Date().getFullYear()},  Designed & Developed by <a href='http://pravinbanjade.com.np/'>Pravin Banjade.</a></p>
    </div>
);

export default footer;
