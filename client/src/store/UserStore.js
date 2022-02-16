import {makeAutoObservable} from 'mobx';

export default class Store{
    constructor(){
        this._isAuth = false
        this._user = {};
        // mobx будет следить за изменениями этих переменных
        makeAutoObservable(this)
    }

//    создадим функции которые буду изменять состояние
    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
//    компьютед функции, вызываются только в том случае если переменная внутри была изменена
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}