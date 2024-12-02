import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { Button } from "bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../components/reset.css"

import "../components/registerpage.css"

const RegisterformPage = () => {

    const [registedValue, UpdatedRegistedvalue] = useState({
        firstNamefield: "",
        lastNamefield: "",
        emailContainerfield: "",
        codeField: "",
        phonenumberField: [],
        genderField: "",
        dobField: "",
        addressField: "",
        cityField: "",
        stateField: "",
    })

    const getRegistervalue = (event) => {
        UpdatedRegistedvalue({...registedValue,[event.target.id]:event.target.value});
    };

    const submitRegistedvalue = () => {
        console.log(registedValue)
    };

    const clearRegistedvalue = () => {
        UpdatedRegistedvalue({
            firstNamefield: "",
        lastNamefield: "",
        emailContainerfield: "",
        codeField: "",
        phonenumberField: [],
        genderField: "",
        dobField: "",
        addressField: "",
        cityField: "",
        stateField: "",
        });
    };

    return (
        <div className="main-container">
            <div className="container">
                <h1>Register form</h1>

                <div className="name-container">
                    <div className="firstname-container">
                        <label>First Name: </label>
                        <input onChange={getRegistervalue} type="text" id="firstNamefield" />
                    </div>
                    <div className="firstname-container">
                        <label>Last Name: </label>
                        <input onChange={getRegistervalue} type="text" id="lastNamefield"/>
                    </div>
                </div>

                <div className="email-cointainer">
                    <label> Email: </label>
                    <input onChange={getRegistervalue} type="text" id="emailContainerfield" />
                </div>

                <div className="phone-num-container">
                    <label>phone Number:</label>

                    <input onChange={getRegistervalue} type="number" placeholder="Code" className="code-box" id="codeField"/>
                    <input onChange={getRegistervalue} type="number" placeholder="Ph.number" className="ph-box" id="phonenumberField" />

                </div>

                <div className="gender_date-container">
                    <div className="gender-container">
                        <label> Gender: </label>

                        <input onChange={getRegistervalue} type="radio" name="gender" id="genderField" />Male
                        <input onChange={getRegistervalue} type="radio" name="gender" id="genderField" />Female
                        <input onChange={getRegistervalue} type="radio" name="gender" id="genderField" />Other

                    </div>
                    <div className="dob-container">
                        <label>Date of Birth: </label>
                        <input onChange={getRegistervalue} type="date" id="dobField" />
                    </div>
                </div>

                <div className="address-container">
                    <label>Address: </label>

                    <div><textarea id="addressField" onChange={getRegistervalue} ></textarea></div>
                </div>

                <div className="city-state-container">
                    <div>
                        <label>City: </label>
                        <input onChange={getRegistervalue} type="text" id="cityField"/>
                    </div>
                    <div>
                        <label>State: </label>
                        <input onChange={getRegistervalue} type="text" id="stateField"/>
                    </div>
                </div>

                <div className="btn-sumbit-clear">
                    <button onClick={clearRegistedvalue}>
                        clear
                    </button>
                    <button onClick={submitRegistedvalue}>
                        Submit
                    </button>

                </div>

            </div>

        </div>
    )
}

export default RegisterformPage;