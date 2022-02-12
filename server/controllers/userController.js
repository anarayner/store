const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')
const jwt = require('jsonwebtoken')

// первым парам передается payload (центральная часть токена - туда передаем email, id и роле)
// вторым парам передаем секретный ключ .env
// исправим пустое поле роли, генерировать токен придется из функции логина, сделаем ее отдельно
const generateJwt=(id, email, role) => {
         return jwt.sign (
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

// создаем класс или функции
class UserController {
    async registration(req, res, next){
    //    получаем email and password from req body
        const {email, password, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Invalid password or email'))
        }
        const condidate = await User.findOne({where: {email}})
        if(condidate){
            return next(ApiError.badRequest('User already exists!'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        // роль получаем из самого пользователя
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }

    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user){
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.badRequest("Incorrect password"))
        }
        const token  = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    // async authCheck(req, res, next){
    //     const {id} = req.query
    //     // если id является обязательным и пользователь его не указал, то необходимо бросить ошибку
    //     // создаем универсальный handler - ApiError
    //     if(!id){
    //         return next(ApiError.badRequest('NO ID'))
    //     }
    //     res.json(id)
    // }


    //  создаем middleware где будем декодировать токен и проверять на валидность
    // если токен не валиден возвращаем ошибку, что пользователь не авторизован
    async authCheck(req, res, next){
       const  token = generateJwt(req.user.id, req.user.email, req.user.role)
        res.json({token})
    }

}

module.exports = new UserController()