import React, { useState } from 'react';
import { ReactDOM } from 'react';
import "./Login.css";
import { useSate } from 'react';
import LoginDetails from '../Json/LoginDetails.json'
import { useLocation, useNavigate } from 'react-router-dom';


let Login = (props) => {
    let location=useLocation();
    console.log(location.pathname)

    let navigator=useNavigate()



    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const { email, password } = formData;
    let changeHandler = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    }

    let submitHandler = (event) => {
        event.preventDefault();
        // console.log(event.target[0].value);
        // console.log(event.target[1].value);
        if(LoginDetails.email === email && LoginDetails.password === password){
            // props.updateState(true);
            navigator("/todolist",true)
        }else{
            navigator("/invalidaccess",true)
        }


    }
    return (
        <div className='login-form'>
            <h3>Todo Login</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='email'>Email :</label>
                    <input type="email" id="email" name="email" onChange={changeHandler} value={email} />
                </div>
                <div>
                    <label htmlFor='password'>Password :</label>
                    <input type="password" id='password' name='password' onChange={changeHandler} value={password}
                    />
                </div>
                <div>
                    <button type='submit' id='submit'>Login</button>
                </div>
            </form>
        </div >

    );
};

export default Login;