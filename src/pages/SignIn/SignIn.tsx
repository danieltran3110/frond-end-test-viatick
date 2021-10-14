import React, { useEffect, useState } from 'react';
import './SignIn.scss';

export default function SignIn() {
    return (
        <div className="signin">
            <div className="signin__inner">
                <h1 className="signin__title">Welcome,</h1>
                <div className="signin__desc">Sign in to continue!</div>
                <form className="signin__form">
                <input className="input" type="email" name="email" placeholder="Email" />
                <input className="input" type="password" name="password" placeholder="Password" />
                <a href="#">Forget password?</a>
                <input type="submit" value="Continue" />
                </form>
            </div>
        </div>
    )
}

