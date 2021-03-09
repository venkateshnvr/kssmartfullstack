import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Register from './register';
import {ipConfig} from './../ipconfig';
import { Redirect, useHistory } from 'react-router-dom';
import {AddEmployee} from './add.employee'
import './sub.login.css';

function SubLogIn() {
    let [enable, setenable] = useState(true);
    let history = useHistory();
    let [login, setlogin] = useState({
        password: "",
        userName: ""
    })

    function handleClick() {
        history.push("/addemployee");
    }
    function logIn() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName: login.userName,
                password: login.password
            })
        };
        fetch(`${ipConfig}/post/login`, requestOptions)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch(err => console.log(err))
        localStorage.setItem('userName', login.userName)
        return handleClick() 
    }

    // if () {
    //     return 
    // }

    // function dir() {
    // }
    return (
        <div>
            {
                enable !== true ? <Register /> :
                    <div>
                        <Form id="form">
                            <Form.Group>
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="" value={login.userName} onChange={e => setlogin({ ...login, userName: e.target.value })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="" value={login.password} onChange={e => setlogin({ ...login, password: e.target.value })} />
                            </Form.Group>
                        </Form>
                        <Button onClick={() => logIn()}>LogIn</Button>
                        <Button onClick={() => setenable(false)}>Reginster</Button>
                    </div>
            }
        </div>
    )
}

export default SubLogIn;