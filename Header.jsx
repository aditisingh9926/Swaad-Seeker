import React from 'react';
import { Helmet } from 'react-helmet';

const Header = () => {
    return (
        <div>
            {/* Helmet for Updating Title */}
            <Helmet>
                <title>Swaad Seeker</title>
            </Helmet>

            <div>
                <img
                    className="w-full h-[650px] object-cover"
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="food"
                />
            </div>
            <div
                className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4"
            >
                <h1 className="text-white text-4xl md:text-5xl font-bold justify-center text-center">
                    <p>
                        Excite your Taste Buds with
                        <br /> Swaad Seeker
                    </p>
                </h1>

                <p
                    className="text-sm mt-5 text-center text-purple-500 bg-[#00000090] px-6 py-4 rounded-full justify-center"
                >
                    We welcome you to Swaad Seeker, your ticket to tastiness!
                    <br className="hidden md:block flex justify-center" />
                    Enjoy your culinary adventures.
                </p>
            </div>
        </div>
    );
};

export default Header;
