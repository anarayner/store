import axios from 'axios'

// инстанс для запросов которые не требуют авторизации
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

// ко второму будет автоматически добавлятся authorisation header
// в который будет подставляться токен
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

// то что делалось через postman
const authInterceptor = config => {
    config.headers.authorisation = `Bearer ${localStorage.getItem('token')}
    return config`
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}