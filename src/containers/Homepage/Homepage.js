import React, { Component } from 'react';

import HomeLayout from './HomeLayout/HomeLayout';

class Home extends Component {
    componentDidMount() {
        document.title = 'Pravin Banjade';
    }
    render() {
        return (
            <HomeLayout>
                <h1>HomePage</h1>
            </HomeLayout>
        )
    }
}

export default Home;
