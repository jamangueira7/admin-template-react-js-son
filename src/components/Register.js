import React from 'react';
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

const Register = (props) => {
    useClass('bg-blue');

    const handleCreate = () => {
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
                                 <h1>Cadastrar</h1>
                                 <p>
                                     Entre com nome, e-mail e senha para criar uma conta.<Link to="login">Login</Link>
                                 </p>
                                 <InputGroup className="mb-3">
                                     <Input type="text" placeholder="Nome"></Input>
                                 </InputGroup>
                                 <InputGroup className="mb-3">
                                     <Input type="email" placeholder="Email"></Input>
                                 </InputGroup>
                                 <InputGroup className="mb-3">
                                     <Input type="password" placeholder="Senha"></Input>
                                 </InputGroup>
                                 <InputGroup>
                                     <Button color="primary" onClick={handleCreate}>Criar!</Button>
                                 </InputGroup>
                                 <InputGroup>
                                     <Link to="forgot">
                                         <Button color="link">Recuperar senha?</Button>
                                     </Link>
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

export default Register;
