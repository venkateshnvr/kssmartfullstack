import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import SubLogIn from './sub.login';
import { ipConfig } from './../ipconfig';

function Register() {
    let [enable, setenable] = useState(true);
    let [register, setregister] = useState({
        fullName: "",
        password: "",
        userName: ""
    })

    const  submit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fullName: register.fullName,
                password: register.password,
                userName: register.userName
            })
        };
        fetch(`${ipConfig}/post/register`, requestOptions)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch(err => console.log(err))
        setenable(false)
    }
    return (
        <div>
            {
                enable !== false ? 
            <div>

                <Form id="form">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" value={register.fullName} onChange={e => setregister({...register, fullName: e.target.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="" value={register.userName} onChange={e => setregister({...register, userName: e.target.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" value={register.password} onChange={e => setregister({...register, password: e.target.value})}/>
                    </Form.Group>
                </Form>
                <Button onClick={() => setenable(false)}>LogIn</Button>
                <Button onClick={() => submit()}>Reginster</Button>
            </div>:<SubLogIn />
            }
        </div>
    )
}

export default Register;
