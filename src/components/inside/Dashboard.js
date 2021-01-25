import React, { useState } from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Collapse
} from 'reactstrap';

export default function Dashboard () {
    return (
        <div>
            <Row>
                <Col xs="12" sm="6" md="4">
                    <Card>
                        <CardHeader>
                            <h4>Card Title</h4>
                        </CardHeader>
                        <CardBody>
                            Text
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
