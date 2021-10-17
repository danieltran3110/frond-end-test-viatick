import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './SignIn.scss';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmitLogin = (e: any) => {
        e.preventDefault();
        history.push('/dashboard');
    }

    return (
        <div className="signin">
            <div className="signin__inner">
                <h1 className="signin__title">Welcome,</h1>
                <div className="signin__desc">Sign in to continue!</div>
                <form className="signin__form" onSubmit={(e) => handleSubmitLogin(e)}>
                    <input className="input" value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="email" name="email" placeholder="Email" required/>
                    <input className="input" value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" name="password" placeholder="Password" required/>
                    <a className="link" href="#">Forget password?</a>
                    <input className="btn-submit" type="submit" value="Continue" />
                </form>
            </div>
            <div className="layer1"></div>
            <div className="layer2"></div>
        </div>
    )
}

