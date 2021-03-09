'use strict';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ipConfig } from './../ipconfig';
// import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Table from 'react-bootstrap/Table';

export function AddEmployee() {
    let [show, setshow] = useState(false);
    let [employeelist, setemployeelist] = useState([]);
    let [employee, setemployee] = useState({
        employeeName: "",
        gender: "",
        degination: "",
        city: ""
    });

    // const employeeData = () => {
    //     fetch()
    //     .then(res => res.json())
    //     .then(data => {
    //         setemployeelist(data)
    //     })
    // }

    const fetchUsers = () => {
        fetch(`${ipConfig}/api/employee/${localStorage.getItem('userName')}`)
            .then(res => res.json())
            .then(data => {
                setemployeelist(data);
            })
    }
    // }, []);
    
    fetchUsers();
    const onsubmit = () => {
        // e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                employeeName: employee.employeeName,
                gender: employee.gender,
                degination: employee.degination,
                city: employee.city,
                admin: localStorage.getItem("userName")
            })
        };
        fetch(`${ipConfig}/api/employee`, requestOptions)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch(err => console.log(err))
        setemployee({
            name: "",
            gender: "",
            designation: "",
            city: ""
        })
        setshow(false)
        // employeeData()
    }


    // useEffect(() => {
    // }, [])
    return (
        <div>
            <Navbar />
            <Modal show={show} onHide={() => setshow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={employee.name} type="text" placeholder="" onChange={e => setemployee({ ...employee, employeeName: e.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" value={employee.gender} onChange={e => setemployee({ ...employee, gender: e.target.value })}>
                                <option>---select Gender---</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="" value={employee.degination} onChange={e => setemployee({ ...employee, degination: e.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control as="select" placeholder="" value={employee.city} onChange={e => setemployee({ ...employee, city: e.target.value })}>
                                <option>---select city---</option>
                                <option>New Delhi</option>
                                <option>Banglore</option>
                                <option>Hyderbad</option>
                                <option>Mumbai</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" size="lg" onClick={() => onsubmit()} block>
                        Save
                </Button>
                </Modal.Footer>
            </Modal>
            <Button onClick={() => setshow(true)}>Add Employee</Button>
            {
                employeelist.map((emp, i) => {
                    <Table>
                    <tbody>
                        <tr>
                            <th>{emp.employeeName}</th>
                            <th>{emp.degination}</th>
                            <th>{emp.gender}</th>
                            <th>
                                <Button>Delete</Button>
                                <Button>Edit</Button>
                            </th>
                        </tr>
                    </tbody>
                    </Table>
                })
            }
        </div>
    )
}
