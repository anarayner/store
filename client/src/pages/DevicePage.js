import React from 'react';
import bigStar from '../accets/bigStar.png'
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';

const DevicePage = () => {
    const device = {id:1 , name: 'Apple', price: 250, rating: 5, img: 'https://terradise.org/wp-content/themes/mast-child/images/empty-photo.jpg'}
    const description=[
        {id:1 , title: 'Hard drive', description: '5 gb'},
        {id:2 , title: 'Hard drive', description: '5 gb'},
        {id:3 , title: 'Hard drive', description: '5 gb'},
        {id:4 , title: 'Hard drive', description: '5 gb'},
        {id:5 , title: 'Hard drive', description: '5 gb'},
    ]
    return (
        <Container>
        <Container className='mt-3 d-flex justify-content-between align-items-center'>
            <Col md={4}>
                <Image  width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Row className='d-flex align-items-center flex-column text-center'>
                    <h2 className=''>{device.name}</h2>
                    <div
                        className='d-flex justify-content-center align-items-center mt-3'
                        style={{background: `url(${bigStar}) no-repeat center center`,
                            width: 250 ,height: 230,
                            backgroundSize: 'cover', fontSize: '64px'}}

                    >{device.rating}</div>
                </Row>
            </Col>
            <Col md={4} >
                <Card className='d-flex p-3'>
                    <h3>$ {device.price}</h3>
                    <Button variant={'primary'} class="btn btn-lg btn-block btn-primary mt-3">Add to Cart</Button>
                </Card>
            </Col>

        </Container>
            <Row className='d-flex flex-column p-3'>
                <h1>Descriptions</h1>
                {description.map((info, index) =>
                    <Row key={info.id}
                         style={{background: index %2 ===0 ? 'lightgrey' : 'transparent', padding: '10px 15px'}}
                    >
                        {info.title}: {info.description}
                    </Row>

                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
