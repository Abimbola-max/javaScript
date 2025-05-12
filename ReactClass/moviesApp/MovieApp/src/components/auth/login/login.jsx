import style from "./login.module.css"
import React, {useState} from "react";
import {useSignUpMutation} from "../../../service/userAuthApi.jsx";
import {Link} from "react-router";


const Login = () => {

    const userDetails = {
        email: "",
        password: "",
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
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={style.loginContainer}>
            <form onSubmit={submitHandler} className={style.loginForm}>
                <h2>Login</h2>
                <div className={style.formGroup}>
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleInput} required />
                </div>
                <div className={style.formGroup}>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleInput} required />
                </div>
                <Link to="/signUp">Don't have an account yet??? Sign Up</Link>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;