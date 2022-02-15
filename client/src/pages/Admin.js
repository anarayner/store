import React, {useState} from 'react';
import {Button, Container} from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviseVisible, setDeviceVisible] = useState(false);


    return (
        <Container className='d-flex flex-column'>
            <Button
                className='mt-4 p-2'
                onClick={() => setTypeVisible(true)}
                variant={'outline-dark'}
                >
                Add Type
            </Button>
            <Button
                onClick={() => setBrandVisible(true)}
                variant={'outline-dark'}
                className='mt-4 p-2'>
                Add Brand
            </Button>
          <Button
          onClick={() => setDeviceVisible(true)}
                variant={'outline-dark'}
          className='mt-4 p-2'>
                Add Device
            </Button>
            <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)}/>
            <CreateDevice show={deviseVisible} onHide={()=> setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;
