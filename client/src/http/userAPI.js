// реализуем функции регистрации авторизации и проверки токена на валидность
import {$host, $authHost} from './index';
import jwt_decode from 'jwt-decode'

export const registration = async(email, password) => {
    // const response = await $host.post('/api/user/registration', {email, password, role: 'ADMIN'})
    // return response
    const {data} = await $host.post('/api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async(email, password) => {
    const {data} = await $host.post('/api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const authCheck = async() => {
    const response = await $authHost.get('/api/user/auth')
    return response
}