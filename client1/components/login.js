import React, { Component } from 'react';
import SubLogIn from './sub.login';
import { Container, Card, Col, Row } from 'react-bootstrap';
import './login.css'

export default class LogIn extends Component {
    render() {
        return (
            <Container id="container">
            <Card>
                <Row>
                    <Col>
                        <SubLogIn />
                    </Col>
                    <Col lg>
                    </Col>
                </Row>
            </Card>
            </Container>
        )
    }
}
