import React,{useState} from "react";
import { Button } from "bootstrap";
import { NavLink } from "react-router-dom";

import "../components/reset.css"

import "../components/landingpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const LandingPage = () => {

    const [loginList, updatedLoginlist] = useState({
        nameField: "",
        passwordField: ""
    })

    const getInputvalue = (event) => {
        // console.log(event.target.value, event.target.id);

        updatedLoginlist({...loginList, [event.target.id]: event.target.value});
    }

    const submitValue = () => {
        console.log(loginList);
    }


    return (
        <div className="mainContainer">
            <div className="container-1">
                <div className="header-content">
                    <h1>L O G I N</h1>
                </div>
                <div className="username-input">
                    <input id="nameField" type="text" placeholder="Username" 
                    onChange={getInputvalue}/>
                </div>
                <div className="password-input">
                    <input id="passwordField" type="password" placeholder="Password" onChange={getInputvalue}/>
                </div>
                <div className="checkbox-content">
                    <div>
                        <input type="checkbox" onChange={getInputvalue}/>Remember me
                    </div>
                    <div>
                        <a href="#">Forget Password?</a>
                    </div>
                </div>
                <div className="login-btn">
                    <button onClick={submitValue}>
                        Login
                    </button>
                </div>
                <div className="container-account">
                    <p>Don't have an account? <br/>
                        <NavLink to="/register">Register</NavLink>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default LandingPage;
