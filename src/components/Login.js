import React, { Component } from 'react';
import { Link } from "react-router-dom";
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

export default class Login extends Component {
    render() {
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
                                         <Button color="primary">Go!</Button>
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
}
