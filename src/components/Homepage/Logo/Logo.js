import React from 'react';

import pravinLogo from '../../../assets/images/favicon.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={pravinLogo} alt="Pravin Banjade Logo" title="Pravin Banjade" />
  </div>
);

export default logo;
