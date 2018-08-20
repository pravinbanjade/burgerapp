import React from 'react';
import { Link } from 'react-router-dom';

import classes from './My404Component.css';

const my404Component = () => (
    <div className={classes.My404Component}>
        <h2>This is shame but sorry you are not authorized to visit this page.</h2>
        <Link to="/">Return to Homepage</Link>
    </div>
)

export default my404Component;
