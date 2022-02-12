const uuid = require('uuid');
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const Sequelize = require('sequelize');

class DeviceController{
    async create(req, res, next){

        try {
            //    получим данные из тела запроса
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            //    после того как файл получен генерируем имя файла (пакет uuid)
            let fileName = uuid.v4() + '.jpg'
            //    создаем папку static, в нее будут помещены все файлы которые будем отправлять с клиента
            //    затем научим сервер эти файлы отдавать как статику чтобы мы могли получать эти файлы через браузер
            //    вызовем mv чтобы файлы переместить в папку
            await img.mv (path.resolve (__dirname, '..', 'static', fileName))
            //    дальше нужно создать сам device, импортируем модель Device
            //    rating не указываем - 0 по default
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            //    если мы передаем данные через form-data они приходят в виде строки
            //    поэтому будем парсить этот массив в json строку на фронте, на бэке обратно перегонять в js обьекты
            //    await не ставим намеренно, чтобы не блокировать весь поток
            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        id: device.id
                    })
                )
            }


            return res.json(device)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        // limit - количество девайсов которые будут отображаться на одной странице
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        // чтобы пропустить первые 10 товаров при переходе на вторую страницу
        let offset = page * limit - limit
        let devices;
        if(!brandId && !typeId){
           devices = await Device.findAndCountAll({limit, offset})
        }
        if(brandId && !typeId){
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})

        }
        if(!brandId && typeId){
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})

        }
        if(brandId && typeId){
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})

        }
        return res.json(devices)
    }



    async getOne(req, res, next){

        try{
            const {id} = req.params
            console.log(id)
            const device = await Device.findOne({
                where: {id},
                // include: [
                //     {
                //         model: DeviceInfo, as: "info" // <---- HERE
                //     }
                // ]
            })
            return res.json(device)

        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new DeviceController()