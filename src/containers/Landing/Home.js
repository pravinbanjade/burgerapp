import React, { Component } from 'react';

import classes from './Home.css';
import Layout from '../../components/Layout/Layout';

class Home extends Component {
    render() {
        return (
            <Layout>
                <div className={classes.Parallax}>
                    <div className={classes.Hero}>
                        Eat Clean to Stay fit,
                    </div>
                    <div className={classes.Hero2}>
                        Have a Burger to Stay Sane
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Home;
