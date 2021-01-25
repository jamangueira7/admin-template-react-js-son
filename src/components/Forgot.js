import React from 'react';
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
import {Link} from "react-router-dom";

const Forgot = (props) => {
    useClass('bg-blue');

    const handleSendEmail = () => {
        console.log('forgot')
    }
    return (
       <div>
           <Container className="mt-5 flex-row align-items-center">
               <Row className="justify-content-center">
                   <Col md="6">
                       <Card>
                         <CardBody>
                             <Form>
                                 <h1>Recuperar senha</h1>
                                 <p>Entre com seu e-mail para resetar sua senha.</p>
                                 <InputGroup className="mb-3">
                                     <Input type="email" placeholder="Email"></Input>
                                 </InputGroup>
                                 <InputGroup>
                                     <Button color="primary" onClick={handleSendEmail}>Go!</Button>
                                     <Link to="login">
                                         <Button color="link">Login</Button>
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

export default Forgot;
