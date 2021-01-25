import React from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';
import { Bar, Pie } from 'react-chartjs-2';

const data = {
    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    datasets: [
        {
            label: 'First',
            backgroundColor: [
                '#00980f',
                '#5633ff',
                '#f97897',
                '#9000ff',
                '#69ff77',
            ],
            borderColor: '#cccccc',
            borderWidth: 1,
            data: [10, 20, 30, 70 ,80]
        }
    ],
};


export default function Charts () {
    return (
        <div>
            <Row>
                <Col xs="12" sm="6" md="6">
                    <Card>
                        <CardHeader>
                            <h4>Charts Bar</h4>
                        </CardHeader>
                        <CardBody>
                            <Bar data={data} width={100} height={80} />
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="6" md="6">
                    <Card>
                        <CardHeader>
                            <h4>Charts Pie</h4>
                        </CardHeader>
                        <CardBody>
                            <Pie data={data} width={100} height={80} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
