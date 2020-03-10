import React, { Fragment } from 'react';
import PokeList from '../PokeList/PokeList';
import Header from '../Header/Header';

function Home() {
    return (
        <Fragment>
            <Header />
            <div className="container mt-2">
                <PokeList />
            </div>
        </Fragment>
    );
}

export default Home;
