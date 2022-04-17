import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name:"",
        email: "", 
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [displayName, setDisplayName] = useState('');
    const handleNameChange=(e)=>{
        
        setDisplayName(e.target.value );
    }
    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    };
    const handlePasswordChange = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };
    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    
    const handelSignUp = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        console.log(displayName);
        await updateProfile({displayName });
        console.log(error)
    };
    return (
        <div className='register-form'>
        <h2 style={{ textAlign: 'center' }}>Please Register</h2>
        <form onSubmit={handelSignUp}>
            <input type="text" name="name" id="" placeholder='Your Name' onChange={handleNameChange} />

            <input type="email" name="email" id="" placeholder='Email Address' required onChange={handleEmailChange} />

            <input type="password" name="password" id="" placeholder='Password' required  onChange={handlePasswordChange} />

            <input type="password" name="confirmPassword" id="" placeholder='Confirm Password' required   onChange={handleConfirmPasswordChange}/>


            <input  type="checkbox" name="terms" id="terms" />
            {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
            <label className={`ps-2 `} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
            <input
                
                className='w-50 mx-auto btn btn-primary mt-2'
                type="submit"
                value="Register" />
        </form>
        <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
        {/* <SocialLogin></SocialLogin> */}
    </div>
    );
};

export default SignUp;