import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

import classes from './My404Component.css';

const my404Component = () => (
    <div className={classes.My404Component}>
        <h2>We are extremely sorry <span role="img" aria-label="jsx-a11y/accessible-emoji">😥</span> but you are not authorized to visit this page.</h2>
        <Link to="/"><Button>Return to Homepage</Button></Link>
    </div>
)

export default my404Component;
