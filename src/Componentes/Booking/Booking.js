import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Booking.css'

const Booking = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div>
            <h1>Booking here</h1>
            {
                <h2>{user?.displayName}</h2>
            }
        </div>
    );
};

export default Booking;