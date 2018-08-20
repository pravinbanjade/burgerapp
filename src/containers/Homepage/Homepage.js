import React, { Component } from 'react';

import HomeLayout from './HomeLayout/HomeLayout';
import Parallax from '../../components/Homepage/Parallax/Parallax';

class Home extends Component {
    componentDidMount() {
        document.title = 'Pravin Banjade';
    }
    render() {
        return (
            <HomeLayout>
                <Parallax />
            </HomeLayout>
        )
    }
}

export default Home;
