import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModelEmployee() {
    return (
        <Modal show={show} onHide={() => setshow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={employee.name} type="text" placeholder="" onChange={e => setemployee({...employee, name: e.target.value})} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" value={employee.gender} onChange={e => setemployee({...employee, gender: e.target.value})}>
                        <option>---select Gender---</option>
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Designation</Form.Label>
                    <Form.Control type="text" placeholder="" value={employee.designation} onChange={e => setemployee({...employee, designation: e.target.value})} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control as="select" placeholder="" value={employee.city} onChange={e => setemployee({...employee, city: e.target.value})}>
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
            <Button variant="success" size="lg" onClick={() => onssubmit()} block>
                Save
        </Button>
        </Modal.Footer>
    </Modal>
    )
}
