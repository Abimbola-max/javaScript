import React, {useState} from 'react'
import style from './signUp.module.css'
import {useSignUpMutation} from "../../../service/userAuthApi.jsx"
import {Link, useNavigate} from "react-router";


const SignUp = () => {

    const navigate = useNavigate();

    const userDetails = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        bankName: "",
        accountNumber: ""
    };

    const [userData, setUserData] = useState(userDetails);

    const res = useSignUpMutation();
    console.log(res);

    const [signUp, {}] = useSignUpMutation();

    const handleInput =(e) => {
        const {name, value} = e.target;
        setUserData((prev) => ({...prev, [name]: value.trim()}))
    };
    console.log(userData);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await signUp(userData).unwrap();
            if (response.seller_id) {
                navigate("/login");
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={style.imageContainer}>
            {/*<img src="/wallpaper.avif" alt=""/>*/}
            <div className={style.signupContainer}>
                <form onSubmit={submitHandler} className={style.signupForm}>
                    <h2>Sign Up</h2>
                    <div className={style.formGroup}>
                        <label>First Name</label>
                        <input type="firstName" name="firstName" onChange={handleInput} required />
                    </div>
                    <div className={style.formGroup}>
                        <label>Last Name</label>
                        <input type="lastName" name="lastName" onChange={handleInput} required />
                    </div>
                    <div className={style.formGroup}>
                        <label>Email</label>
                        <input type="email" name="email" onChange={handleInput} required />
                    </div>
                    <div className={style.formGroup}>
                        <label>Password</label>
                        <input type="password" name="password" onChange={handleInput} required />
                    </div>
                    <div className={style.formGroup}>
                        <label>Bank Name</label>
                        <input type="bankName" name="bankName" onChange={handleInput} required />
                    </div>
                    <div className={style.formGroup}>
                        <label>Account Number</label>
                        <input type="accountNumber" name="accountNumber" onChange={handleInput} required />
                    </div>
                    <Link to="/login">Already have an account?? Login</Link>
                    <button type="submit">SignUp</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp




