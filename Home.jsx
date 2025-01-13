import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <main>
            {/* Adding Helmet for page metadata */}
            <Helmet>
                <title>Swaad Seeker</title>
                <meta name="description" content="Discover and enjoy a variety of delicious recipes on Swaad Seeker." />
            </Helmet>
            
            {/* Your existing components */}
            <Navbar />
            <Header />
        </main>
    );
}

export default Home;
