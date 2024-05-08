import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.css';
<<<<<<< HEAD
=======
import Footer from '../components/Footer';
>>>>>>> 58fca7f9576d41c54bf50c36e887b6ef9eed94b3

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
