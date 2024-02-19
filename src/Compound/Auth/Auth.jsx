import React, { useEffect } from 'react';
import './Auth.css';
import { useForm } from 'react-hook-form';
import userData from './UserData';

const Auth = () => {
    useEffect(() => {
        window.localStorage.setItem("isLogin", false);
    }, [])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignIn = (data) => {
        var flag = false;
        var user = null;
        userData.forEach(item => {
            if (item.email === data.email && item.password === data.password) {
                flag = true;
                user = item;
            }
        });

        if (flag) {
            // Store user data in local storage
            window.localStorage.setItem("isLogin", true);
            window.localStorage.setItem("currentUser", JSON.stringify(user));
            window.location.reload();
        } else {
            alert("Email or Password is incorrect");
        }
    };


    return (
        <div className='mn'>
            <div className="container">
                <div className="heading">Sign In</div>
                <form action="" className="form" onSubmit={handleSubmit(handleSignIn)}>
                    <input type="email" name="email" {...register("email", {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })} required className="input" id="email" placeholder="E-mail" />
                    <input required className="input" type="password" name="password"    {...register("password", { required: true })} id="password" placeholder="Password" />
                    <button className="login-button" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Auth;
