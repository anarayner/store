import React from 'react';
import {Card, Col, Image} from 'react-bootstrap';
import star from '../accets/star.png'
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTE} from '../util/consts';

const DeviceItem = ({device}) => {
    // делаем устройства кликабельными, чтобы переходить на страницу детального просмотра
    // с помощью него можно динамически передвигать по страницам
    // это обьект, внутри него есть функция push и с помощью него можно переходить на конкретную страницу
    const navigate = useNavigate()
    return (
        <Col
            md={3}
            onClick={() => navigate(DEVICE_ROUTE +'/' + device.id)}
        >
            <Card
                style={{width: 235, cursor: 'pointer'}}
                border={'light'}
                className='p-3 m-3'
            >
                 <Image width={200} height={200} src={device.img}/>
                  <div className='text-black-50 d-flex justify-content-between align-items-center mt-1'>
                      <div>Samsung...</div>
                      <div className='d-flex  align-items-center'>
                          <div>{device.rating}</div>
                          <Image src={star} width={18} height={18} className='m-2'/>
                      </div>
                  </div>
                <div>{device.name}</div>

            </Card>
        </Col>
    );
};

export default DeviceItem;
