// создаем универсальный хендлер
class ApiError extends Error{
    constructor(status, message){
        super();
        this.status = status
        this.message = message

    }
    // статические функции можем вызывать без создания обьекта (обращаемся напрямую к классу
    // и вызываем функцию)
    static badRequest (message){
        return new ApiError(404, message)
    }

    static internal (message){
        return new ApiError(500, message)
    }

    static forbidden (message){
        return new ApiError(403, message)
    }
}

module.exports = ApiError