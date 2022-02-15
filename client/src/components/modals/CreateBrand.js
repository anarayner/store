import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

const CreateDevice = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={'Enter brand name..'}
                    />
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
