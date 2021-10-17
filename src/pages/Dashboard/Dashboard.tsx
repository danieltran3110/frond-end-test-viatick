import React from 'react';
import './Dashboard.scss';
import logo from "../../images/logo.png";
import sign from "../../images/logo2.png";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import icon6 from "../../images/icon6.png";
import icon7 from "../../images/icon7.png";
import icon14 from "../../images/icon14.png";
// import icon15 from "../../images/icon15.png";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard__left">
                <div className="comp1">
                    <figure className="logo">
                        <img src={logo} alt="logo" />
                    </figure>
                    <figure className="sign">
                        <img src={sign} alt="logo" />
                    </figure>
                </div>
                <div className="comp2">
                    <figure className="icon">
                        <img src={icon1} alt="icon1" />
                    </figure>
                    <p className="text">Login</p>
                </div>
                <div className="comp2">
                    <figure className="icon">
                        <img src={icon2} alt="icon2" />
                    </figure>
                    <p className="text">Sign Up</p>
                </div>
                <div className="comp2">
                    <figure className="icon">
                        <img src={icon3} alt="icon3" />
                    </figure>
                    <p className="text">404 Page</p>
                </div>
                <p className="desc">Apps</p>
                <div className="comp2">
                    <figure className="icon">
                        <img src={icon4} alt="icon4" />
                    </figure>
                    <p className="text">Project Manage... <figure className="ic"><img src={icon5} alt="ic" /></figure></p>
                </div>
                <div className="comp2">
                    <figure className="icon">
                        <img src={icon6} alt="icon4" />
                    </figure>
                    <p className="text">Knowledge <figure className="ic"><img src={icon5} alt="ic" /></figure></p>
                </div>
                <div className="comp2">
                    <figure className="icon">
                        <img src={icon7} alt="icon4" />
                    </figure>
                    <p className="text">Sales <figure className="ic"><img src={icon5} alt="ic" /></figure></p>
                </div>
                <div className="comp2">
                    <figure className="icon">
                        <img src={icon7} alt="icon4" />
                    </figure>
                    <p className="text">Appointment <figure className="ic"><img src={icon5} alt="ic" /></figure></p>
                </div>
                <div className="comp2">
                    <figure className="icon">
                        <img src={icon7} alt="icon4" />
                    </figure>
                    <p className="text">CRM <figure className="ic"><img src={icon5} alt="ic" /></figure></p>
                </div>
                <div className="comp2">
                    <figure className="icon">
                        <img src={icon7} alt="icon4" />
                    </figure>
                    <p className="text">Chat <figure className="ic"><img src={icon5} alt="ic" /></figure></p>
                </div>
                <div className="comp2">
                    <figure className="icon">
                        <img src={icon7} alt="icon4" />
                    </figure>
                    <p className="text">Documentation <figure className="ic"><img src={icon5} alt="ic" /></figure></p>
                </div>
                <div className="comp3">
                    <figure className="icon">
                        <img src={icon14} alt="icon4" />
                    </figure>
                    <p className="text">John Doe <span>CEO, Founder</span></p>
                </div>
            </div>
            <div className="dashboard__right">
                
            </div>
        </div>
    )
}

