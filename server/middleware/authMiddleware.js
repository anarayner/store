// сразу делаем проверку если метод = options то пропускаем
// нас интересует только put get delete

const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    if(req.method === 'OPTIONS'){
        return next()
    }
    try {
    //    из headers получаем сам токен
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(401).json({message: 'User unauthorized'})
        }
    //    если токен есть то дискодируем
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next();
    } catch (e){
        res.status(401).json({message: 'User unauthorized'})
    }
}