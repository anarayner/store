import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from 'react-bootstrap';
import {Context} from '../../index';

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    // для каждого устройства сделаем массив характеристик
    const [info, setInfo] = useState([])

    const addInfo =()=>{
        setInfo([...info, {title:'', description:'', number: Date.now()}])
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Dropdown >
                    <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(item =>
                        <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mt-3'>
                    <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(item =>
                            <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className='mt-3'
                    placeholder={'Enter device name..'}
                />
                <Form.Control
                    className='mt-3'
                    type='number'
                    placeholder={'Enter price..'}
                />
                <Form.Control
                    className='mt-3'
                    type='file'
                />
                <hr/>
                <Button onClick={addInfo} variant='outline-dark'>Add Info</Button>
                {info.map(i=>
                     <Row className='mt-4' key={i.number}>
                         <Col md={4}>
                             <Form.Control
                                 placeholder='Enter description name..'
                             />
                         </Col>
                         <Col md={4}>
                             <Form.Control
                                 placeholder='Enter description..'
                             />
                         </Col>
                         <Col md={4}>
                             <Button onClick={onHide} variant='outline-danger'>Remove</Button>
                         </Col>
                     </Row>
                )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant='outline-primary'>Add new Type</Button>
                <Button onClick={onHide} variant='outline-dark'>Close</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;

