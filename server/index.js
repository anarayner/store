require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
// importing all modules
const models = require('./models/models')
//importing cors for sending request from browser
const cors = require('cors')
const PORT = process.env.PORT || 5000
//импортируем основной роутер, который связывает все остальные
const router = require('./routes/index.js')
// middleware для непредвиденных ошибок, которых нет в нашем классе ApiError
// обязательно последний, в данном случае middleware является замыкающим поэтому
// внутри него next мы не вызывали (на нем работа завершается и мы возвращаем на клиент ответ)
const errorHandler = require('./middleware/ErrorHandlerMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')


const app = express()
app.use(cors())
// to let app parse json
app.use(express.json())
// необходимо явно указать серверу, что файлы из папки static необходимо раздавать как статику
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

// creating first method - ('api' по которому этот запрос будет отрабатывать'),
// вторым - callback которая принимает запрос и ответ
// checking:
// app.get('/', (req, res) => {
//   res.json({message:'GET!!'})
// });

app.use('/api', router)



app.use(errorHandler)

//function for connecting to DB
const start = async () =>{
    try{
        //connection
        await sequelize.authenticate()
        // будет сверять состояние базы данных со схемой данных которую мы опишем позже
        await sequelize.sync()
        app.listen(PORT, ()=>console.log(`server listening ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()