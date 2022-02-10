require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
// importing all modules
const module = require('./models/models')
const PORT = process.env.PORT || 5000

const app = express()

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