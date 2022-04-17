import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='container p-5 mx-auto'>
            <Link to='/booking'> <button className='btn btn-primary fs-5'>Booking</button> </Link>
        </div>
    );
};

export default Home;