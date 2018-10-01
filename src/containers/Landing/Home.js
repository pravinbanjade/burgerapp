import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Home.css';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import About from './About/About';
import Footer from './Footer/Footer';

class Home extends Component {
    render() {
        return (
            <Layout>
                <div className={classes.Parallax}>
                    <div className={classes.Hero}>
                        Build Your Own Burger
                    </div>
                    <Link to='/burgerapp'>
                        <Button>Build Now</Button>
                    </Link>
                </div>
                <About />
                <Footer />
            </Layout>
        )
    }
}

export default Home;
