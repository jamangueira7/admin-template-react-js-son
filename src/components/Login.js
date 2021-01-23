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

const Login = () => {
    useClass('bg-blue');

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
                                 <p>
                                     Entre com e-mail e senha para acessar. Novo? <Link to="register">Registrar-se</Link>
                                 </p>
                                 <InputGroup className="mb-3">
                                     <Input type="email" placeholder="Email"></Input>
                                 </InputGroup>
                                 <InputGroup className="mb-3">
                                     <Input type="password" placeholder="Senha"></Input>
                                 </InputGroup>
                                 <InputGroup>
                                     <Button color="primary" onClick={handleLogin}>Go!</Button>
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

export default Login;
