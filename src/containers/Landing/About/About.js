import React from 'react';

import classes from './About.css';
import Burger1 from '../../../assets/images/burger3.jpg';
import Burger2 from '../../../assets/images/burger4.jpg';

const about = () => (
    <div className={classes.About}>
        <h1 className={classes.Title}>Who We Are?</h1>
        <p className={classes.Desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className={classes.ImgLeft} />
        <div className={classes.ImgRight} />
        <p className={classes.Title2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className={classes.Desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />

        <div className={classes.Burger}>
            <img src={Burger1} alt="Burger" className={classes.Burger1} />
            <img src={Burger2} alt="Burger" className={classes.Burger2} />
        </div>
        <p className={classes.Desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
);

export default about;
