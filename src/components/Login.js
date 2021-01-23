import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import useClass from './../hooks/add-class-body';
import {
    Container,
    Col,
    Row,
    Form,
    Card,
    CardBody,
    Input,
    InputGroup,
    Button,
} from 'reactstrap';

const Login = () => {
    useClass('page-login');

    const handleLogin = () => {
        console.log('login')
    }
    return (
       <div>
           <Container className="mt-5 flex-row align-items-center">
               <Row className="justify-content-center">
                   <Col md="6">
                       <Card>
                         <CardBody>
                             <Form>
                                 <h1>Login</h1>
                                 <p>Entre com e-mail e senha para acessar</p>
                                 <InputGroup className="mb-3">
                                     <Input type="email" placeholder="Email"></Input>
                                 </InputGroup>
                                 <InputGroup className="mb-3">
                                     <Input type="password" placeholder="Senha"></Input>
                                 </InputGroup>
                                 <InputGroup>
                                     <Button color="primary" onClick={handleLogin}>Go!</Button>
                                 </InputGroup>
                             </Form>
                         </CardBody>
                       </Card>
                   </Col>
               </Row>
           </Container>
       </div>
    );
}

export default Login;
