import React from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Label,
    Button,
    Input
} from 'reactstrap';

export default function Forms () {
    return (
        <div>
            <Row>
                <Col xs="12" sm="12" md="12">
                    <Card>
                        <CardHeader>
                            <h4>Form</h4>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={() => {}}>
                                <FormGroup>
                                    <Label for="name">Name:</Label>
                                    <Input type="text" placeholder="Digite o seu nome..." />
                                </FormGroup>
                                <FormGroup>
                                    <Button>Enviar</Button>
                                </FormGroup>
                            </form>
                        </CardBody>
                        <CardFooter>
                            Footer
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
