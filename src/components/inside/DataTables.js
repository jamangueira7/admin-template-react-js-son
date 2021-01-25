import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from 'reactstrap';

import BootStrapDataTables from 'react-bootstrap-table-next';
import PaginationFactory from 'react-bootstrap-table2-paginator';

const columns = [
    {
       dataField: 'id',
       text: 'ID'
    },
    {
        dataField: 'title',
        text: 'TITLE'
    },
    {
        dataField: 'price',
        text: 'PREÇO'
    }
];

export default function DataTable () {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataset = [
            { id: 1, title: 'Product 1', price: 10},
            { id: 2, title: 'Product 2', price: 15},
            { id: 3, title: 'Product 3', price: 20},
            { id: 4, title: 'Product 4', price: 20},
            { id: 5, title: 'Product 5', price: 20},
            { id: 6, title: 'Product 6', price: 20},
            { id: 7, title: 'Product 7', price: 20},
            { id: 8, title: 'Product 8', price: 20},
            { id: 9, title: 'Product 9', price: 20},
            { id: 10, title: 'Product 10', price: 20},
            { id: 11, title: 'Product 11', price: 20},
        ];
        setData(dataset);
    }, []);
    return (
        <div>
            <Row>
                <Col xs="12" sm="6" md="6">
                    <Card>
                        <CardHeader>
                            <h4>DataTables</h4>
                        </CardHeader>
                        <CardBody>
                            <BootStrapDataTables
                                keyField='id'
                                data={data}
                                columns={columns}
                                hover
                                condensed
                                pagination={ PaginationFactory() }
                            />
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
